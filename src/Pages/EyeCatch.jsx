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
          src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
          <p>This is some overlay text on the image.</p>
        </div>
      </div>
      
  );
}

export default EyeCatch;
