function App() {
  return (
    <div style={{ textAlign: 'center', padding: '60px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '40px' }}>Hello, I'm Charles 👋</h1>
      <p style={{ fontSize: '18px' }}>ERA Axis Bootcamp - My Portfolio Day 1</p>
      
      <p style={{ marginTop: '20px' }}>
        I just built my first React website and it's running on my laptop!
      </p>

      <button 
        onClick={() => alert('Session 1 Complete! 🚀')}
        style={{ 
          marginTop: '20px', 
          padding: '12px 25px', 
          fontSize: '16px',
          background: 'black',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>

      <p style={{ marginTop: '30px', color: 'gray' }}>
        Next: I will add my projects & contact.
      </p>
    </div>
  )
}

export default App