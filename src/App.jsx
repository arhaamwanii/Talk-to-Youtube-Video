import { useState } from 'react'
import './App.css'
import { DefaultInput } from './Components/Input'
import { TrailingIconButtons } from './Components/Button';
import { SuccessBanner } from './Components/Output';
import Header from './Components/Heder';

function App() {

  return (
    <>
  <Header/>
  <div className="align">
    <DefaultInput classN="input1"  placeholder="Youtube URL"/>
    <DefaultInput classN="input2" placeholder="Question"/>
  </div>

  <div className='button '>
    <TrailingIconButtons />
  </div>
  <SuccessBanner/>
  <div>

  </div>
  
    </>
  )
}

export default App
