import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <div className='ControlBox'>     </div>
      <div className='PanelBox'>  </div>
     </div>
    </>
  )
}

export default App
