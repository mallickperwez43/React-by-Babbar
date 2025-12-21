import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  // // Way 1 : if else
  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn></LogoutBtn>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn></LoginBtn>
  //   )
  // }


  // // Way 2 : Ternary Operator
  // return (
  //   <>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </>
  // )


  // // Way 3 : Logical Operator
  // return (
  //   <>
  //     {isLoggedIn && <LogoutBtn />}
  //   </>
  // )


  // Way 4 : Early return
  if (!isLoggedIn) {
    return (
      <>
        <h2>You need to login first</h2>
        <LoginBtn></LoginBtn>
      </>
    )
  }

  return (
    <>
      <h2>You are logged in already!!</h2>
      {isLoggedIn && <LogoutBtn />}
    </>
  )
}

export default App