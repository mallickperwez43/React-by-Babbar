import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Card name="Love Babbar">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children="I am a children">
        <p>I am a Para</p>
      </Card>

      <Button handleClick={handleClick} text="Click Me">
        <div id='counter'>{count}</div>
      </Button>
    </div>
  )
}

export default App
