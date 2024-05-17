////////////////
/// Embedded Home
////////////////

import React from 'react';

function EmbeddedPage() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', border: '0.5px solid black' }}>
      {/* 外部のウェブページを埋め込む */}
      <iframe
        src="https://sym.cs-ninhyou.com/exp/home.html" // 埋め込みたいウェブページのURLを指定
        title="Embedded Page"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

export default EmbeddedPage;
