////////////////
/// Eyecatch Home
////////////////

import React from 'react';
import '../css/EyeCatch.css'

function EyeCatch() {
  return (
    <div style={{ 
        position: 'relative', 
        textAlign: 'center', 
        width: '100%', 
        maxHeight:'400px',
        margin: '0 auto', 
        overflow: 'hidden',
          }}>
        <img
         //src="https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/f0shift%404x.png?alt=media&token=5b152dce-9d1c-4a9e-9aea-9ebe34a2614c"
          src="https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/IMG_3537.jpeg?alt=media&token=ba3cc498-4a67-4783-8f61-0442ca6c4c5a"
          alt="Sample"
          style={{
            display: 'inline-block', // center
            objectFit: 'contain', 
          }}
        />
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center', 
          color: 'white', 
          //backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '10px',
          borderRadius: '5px',
        }}>
          <h2>Psyacoustic Lab</h2>
          <p>Here, you can test a variety of classical psychoacoustic tasks</p>
        </div>
      </div>
      
  );
}

export default EyeCatch;
