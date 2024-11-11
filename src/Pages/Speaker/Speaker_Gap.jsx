import React, { useState, useRef, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

function Speaker_Gap() {

  const location = useLocation();
  const data = location.state;

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const iframeRef = useRef(null);

  const sendMessageToIframe = () => { // emailデータ react - reactのデータ受け渡し
    const message = data.userID;
    console.log(message, iframeRef);
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(message, '*');
      console.log('post message')
    }
  };

  useEffect(() => {
      // iframe が完全に読み込まれてからメッセージを送信する
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.onload = sendMessageToIframe;
      }
  
      // クリーンアップ関数
      return () => {
        if (iframe) {
          iframe.onload = null;
        }
      };
    }, []);

    
    // iframeが終了したhomeに戻る
    const navigate = useNavigate();
    useEffect(() => {


      const handleMessage = (event) => {
        if (event.data.length == 4 ) {  // finish adjust experiment
          //event.data === 'experiment_finished
          // Close the iframe and navigate to home page
          data.speaker_FDL = event.data[0];
          data.speaker_GAP = event.data[1];
          data.speaker_DYAD = event.data[2];
          data.speaker_HP = event.data[3];

          data.adjust = true; // connect adjust and huggins pitch*/
          console.log(event.data)
          if(data.speaker_FDL == false && data.speaker_GAP == false && data.speaker_DYAD == false && data.speaker_HP == false){
            data.speaker_exp = false;
            // 全ての実験終了
          }
          if (data.wired_exp == false && data.wireless_exp == false && data.speaker_exp == false){ // 実験終了
            data.end_exp = true;
          }
          navigate('/psyacoustic',{state:data});
        }else{
          console.log('no message',event.data,event.data.length);
        }
      };
  
      window.addEventListener('message', handleMessage);
  
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, [navigate]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', border: '0.5px solid black' }}>
      {/* ローディング画面 */}
      {loading && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1>Loading...</h1>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='pink.500'
              size='xl'
            />
          </div>
        </div>
      )}

      {/* 外部のウェブページを埋め込む */}
      <iframe
         ref={iframeRef}
        src="https://sym.cs-ninhyou.com/exp/speaker_gap_async.html" // 埋め込みたいウェブページのURLを指定
        title="Gap Detection"
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Speaker_Gap;
