import { version } from 'react'
import reactLogo from './assets/react.svg'
function App() {

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>hola react {version}</h1>
        <small style={{color:'yellow'}}>La versión es {version}</small>
      </div>
    </>
  )
}

export default App
