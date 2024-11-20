import React, { useState, useRef, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {

  const location = useLocation();
  const data = location.state;

  console.log(data,'f0shiftdata')

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const iframeRef = useRef(null);

  const sendMessageToIframe = () => { // emailデータ react - reactのデータ受け渡し
    /*
    const message = data.userID;
    console.log(message, iframeRef);
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(message, '*');
      console.log('post message')
    }*/
  };

  /*
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
    }, []);*/

    
    // iframeが終了したhomeに戻る
    const navigate = useNavigate();
    useEffect(() => {


      const handleMessage = (event) => {
        if (event.data.length > 16 ) {  // finish adjust experiment
          //event.data === 'experiment_finished
          data.question = event.data[0];

          data.wired_FDL = event.data[1];
          data.wired_GAP = event.data[2];
          data.wired_DYAD = event.data[3];
          data.wired_HP = event.data[4];
          data.wired_VOL = event.data[5];
          data.adjust = true; // connect adjust and huggins pitch*/

          data.wireless_FDL = event.data[6];
          data.wireless_GAP = event.data[7];
          data.wireless_DYAD = event.data[8];
          data.wireless_HP = event.data[9];
          data.wireless_VOL = event.data[10];

          data.speaker_FDL = event.data[11];
          data.speaker_GAP = event.data[12];
          data.speaker_DYAD = event.data[13]; 
          data.speaker_HP = event.data[14];
          data.speaker_VOL = event.data[15];

          data.userID = event.data[16];
          data.random = event.data[17]

          console.log(event.data)

          // wired実験が終了しているかどうか
          if(data.wired_FDL == false && data.wired_GAP == false && data.wired_DYAD == false && data.wired_HP == false){
            data.wired_exp = false;
          } 
          // wireless実験が終了しているかどうか
          if(data.wireless_FDL == false && data.wireless_GAP == false && data.wireless_DYAD == false && data.wireless_HP == false){
            data.wireless_exp = false;
          } 
          // speaker実験が終了しているかどうか
          if(data.speaker_FDL == false && data.speaker_GAP == false && data.speaker_DYAD == false && data.speaker_HP == false){
            data.speaker_exp = false;
          } 

          if(data.wired_exp == false && data.wireless_exp == false && data.speaker_exp == false){ // 実験終了
            data.end_exp = true;
            navigate('/psyacoustic',{state:data});
          }else{
          navigate('/psyacoustic',{state:data});
          }


        }else{
          navigate('/psyacoustic');//{,state:data}
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
        src="https://sym.cs-ninhyou.com/exp/login.html" 
       // src="https://sym.cs-ninhyou.com/exp/trash.html" // 埋め込みたいウェブページのURLを指定
        title="Login"
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={handleLoad}
        //id="myIframe"
      />
    </div>
  );
}

export default Login;
