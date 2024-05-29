import React, { useState } from 'react';
import { Spinner } from '@chakra-ui/react'

function TMTF() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

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
        src="https://sym.cs-ninhyou.com/exp/tmtf.html" // 埋め込みたいウェブページのURLを指定
        title="Temporal Modulation Transfer Function"
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default TMTF;
