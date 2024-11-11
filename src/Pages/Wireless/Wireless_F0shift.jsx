import React, { useState, useRef, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

function Wireless_F0shift() {

  const location = useLocation();
  const data = location.state;

  console.log(data,'f0shiftdata')

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
          data.wireless_FDL = event.data[0];
          data.wireless_GAP = event.data[1];
          data.wireless_DYAD = event.data[2];
          data.wireless_HP = event.data[3];
          data.adjust = true; // connect adjust and huggins pitch*/
          console.log(event.data)
         
          // 有線データが全て取れたら
          if(data.wireless_FDL == false && data.wireless_GAP == false && data.wireless_DYAD == false && data.wireless_HP == false){
            data.wireless_exp = false;
          } 
          // すべての実験終了
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

      {/* 外部のウェブページを埋め込む*/}
      <iframe
        ref={iframeRef}
        //src="https://sym.cs-ninhyou.com/exp/f0shift.html" 
        src="https://sym.cs-ninhyou.com/exp/wireless_f0shift_async.html" 
       // src="https://sym.cs-ninhyou.com/exp/trash.html" // 埋め込みたいウェブページのURLを指定
        title="F0 Shift"
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={handleLoad}
        //id="myIframe"
      />
    </div>
  );
}

export default Wireless_F0shift;
