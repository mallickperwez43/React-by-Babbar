import './App.css'
import CounterPanel from './components/CounterPanel'
import TodoPanel from './components/TodoPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-row items-center justify-center gap-9 px-6">
      <CounterPanel />
      <TodoPanel />
    </div>
  )
}

export default App