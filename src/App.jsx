import Projects from './components/Projects'

function App() {
  return (
    <div style={{background: 'white', color: '#222', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif', textAlign: 'center'}}>
      <h1 style={{color: '#5B2CFF'}}>Hello, I'm Charles 👋</h1>
      <p>ERA Axis Bootcamp - Future Web Developer</p>
      <p>I built my first React website from zero.</p>
      
      <Projects />

      <a href="#" style={{display: 'inline-block', marginTop: '30px', background: '#5B2CFF', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}>
        Contact Me
      </a>
    </div>
  )
}
export default App