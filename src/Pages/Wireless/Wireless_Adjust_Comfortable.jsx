import React, { useState, useRef, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

function Wireless_Adjust_Comfortable() {

  const location = useLocation(); // get userID react to react
  const data = location.state;
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

  // load iframe
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

   // iframeが終了したhomeに戻る
   const navigate = useNavigate();
   useEffect(() => {
     const handleMessage = (event) => {
       if (event.data === 'experiment_finished') {  // finish adjust experiment
         // Close the iframe and navigate to home page
         data.wireless_VOL = false;
         data.adjust = true; // connect adjust and huggins pitch
         //data.endexp = true;
         navigate('/psyacoustic',{state:data});
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
        ref = {iframeRef}
        src="https://sym.cs-ninhyou.com/exp/wireless_loudness.html" // 埋め込みたいウェブページのURLを指定
        title="Adjust Comfortable Level"
        allow="microphone"
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Wireless_Adjust_Comfortable;