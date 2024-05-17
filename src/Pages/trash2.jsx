<div style={{ 
  position: 'relative', 
  textAlign: 'center', 
  width: '100%', 
  margin: '0 auto', 
}}>
  <img
    src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    alt="Sample"
    style={{
      maxWidth: '100%', // 横幅を親要素いっぱいに広げる
      maxHeight: '400px', // 縦幅を最大400pxに制限
      display: 'inline-block', // 中央配置のために必要
      transform: 'translate(-50%, -50%)', // 中央配置
      position: 'relative', // 中央配置
      top: '50%', // 中央配置
      left: '50%', // 中央配置
    }}
  />
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    textAlign: 'center', 
    color: 'white', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '10px',
    borderRadius: '5px',
  }}>
    <h2>Text Overlay</h2>
    <p>This is some overlay text on the image.</p>
  </div>
</div>
