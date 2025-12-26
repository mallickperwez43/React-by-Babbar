import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1); // for variation 4

  // Defination
  // // first -> side-effect function
  // // second -> clean-up function
  // // third -> comma seperated depenceny list
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // // Variation 1 
  // // Runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  // return (
  //   <div
  //     className='flex justify-center items-center h-screen font-black text-2xl flex-col'
  //   >
  //     <button
  //       className='px-4 py-2 bg-blue-500 text-white rounded-lg'
  //       onClick={handleClick}
  //     >
  //       Click Me
  //     </button>
  //     <span className='mt-2 px-3 py-2.5 bg-amber-300 text-white rounded-xl'>
  //       Count is {count}
  //     </span>
  //   </div>
  // )


  // // Variation 2 
  // // Runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  // return (
  //   <div
  //     className='flex justify-center items-center h-screen font-black text-2xl flex-col'
  //   >
  //     <button
  //       className='px-4 py-2 bg-blue-500 text-white rounded-lg'
  //       onClick={handleClick}
  //     >
  //       Click Me
  //     </button>
  //     <span className='mt-2 px-3 py-2.5 bg-amber-300 text-white rounded-xl'>
  //       Count is {count}
  //     </span>
  //   </div>
  // )


  // // Variation 3 
  // // Runs on single dependency
  // useEffect(() => {
  //   alert("I will run evrytime when the state of count is updated")
  // }, [count])

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  // return (
  //   <div
  //     className='flex justify-center items-center h-screen font-black text-2xl flex-col'
  //   >
  //     <button
  //       className='px-4 py-2 bg-blue-500 text-white rounded-lg'
  //       onClick={handleClick}
  //     >
  //       Click Me
  //     </button>
  //     <span className='mt-2 px-3 py-2.5 bg-amber-300 text-white rounded-xl'>
  //       Count is {count}
  //     </span>
  //   </div>
  // )


  // // Variation 4 
  // // Multiple Dependencies
  // useEffect(() => {
  //   alert("I will run everytime when the state of count/total is updated")
  // }, [count, total])

  // const handleClickCount = () => {
  //   setCount(count + 1);
  // }

  // const handleClickTotal = () => {
  //   setTotal(total + 1);
  // }

  // return (
  //   <div
  //     className='flex justify-center items-center h-screen font-extrabold text-2xl flex-col'
  //   >
  //     <div
  //       className='flex flex-row gap-x-2.5 px-3 py-2'
  //     >
  //       <button
  //         className='px-4 py-2 bg-red-500 text-white rounded-lg'
  //         onClick={handleClickCount}
  //       >
  //         Count Update
  //       </button>
  //       <div className='px-4 py-2 bg-blue-500 text-white rounded-xl'>
  //         Count is {count}
  //       </div>
  //     </div>

  //     <div
  //       className='flex flex-row gap-x-2.5 px-3 py-2'
  //     >
  //       <button
  //         className='px-4 py-2 bg-green-500 text-white rounded-lg'
  //         onClick={handleClickTotal}
  //       >
  //         Total Update
  //       </button>
  //       <div className='px-4 py-2 bg-yellow-500 text-white rounded-xl'>
  //         Count is {total}
  //       </div>
  //     </div>

  //   </div>
  // )


  // // Variation 5 
  // // Addition of cleanup function
  // useEffect(() => {
  //   alert("The state of count is updated");

  //   return () => {
  //     alert("Count is unmounted from the UI");
  //   }

  // }, [count])

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  // return (
  //   <div
  //     className='flex justify-center items-center h-screen font-black text-2xl flex-col'
  //   >
  //     <button
  //       className='px-4 py-2 bg-blue-500 text-white rounded-lg'
  //       onClick={handleClick}
  //     >
  //       Click Me
  //     </button>
  //     <span className='mt-2 px-3 py-2.5 bg-amber-400 text-white rounded-xl'>
  //       Count is {count}
  //     </span>
  //   </div>
  // )

  return (
    <div
      className='flex justify-center items-center font-black text-2xl flex-col gap-4 px- 4 py-2'
    >
      {/* Example 1 */}
      {/* <LoggerComponent /> */}

      {/* Example 2 */}
      {/* <TimerComponent /> */}

      {/* Example 3 */}
      {/* <DataFetcher /> */}

      {/* Example 4 */}
      {/* <ResizeComponent /> */}

      {/* Example 5 */}
      <MultiEffectComponent />
    </div >
  )
}

export default App