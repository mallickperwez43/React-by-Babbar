import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwa dunga
  const [name, setName] = useState('');

  return (
    <div id='container'>
      <Card title="Card_1" name={name} setName={setName}> </Card>
      <Card title="Card_2" name={name} setName={setName}> </Card>
      <Card title="Card_3" name={name} setName={setName}> </Card>
      <Card title="Card_4" name={name} setName={setName}> </Card>
      <Card title="Card_5" name={name} setName={setName}> </Card>
      <Card title="Card_6" name={name} setName={setName}> </Card>
    </div>
  )
}

export default App
