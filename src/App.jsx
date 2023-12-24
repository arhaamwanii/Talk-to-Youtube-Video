
import { useState } from 'react'
import './App.css'
import { DefaultInput } from './Components/Input'
import { TrailingIconButtons } from './Components/Button';
import { SuccessBanner } from './Components/Output';
import Header from './Components/Heder';
import { Hero } from './Components/Hero';
import { AlertBanner } from './Components/FialedOutput';
import { client } from "@gradio/client";
import Loading from './Components/Loading';


function App() {
let [response , setResponse] = useState(null);
const [isHidden, setIsHidden] = useState(true);
const [outPut , setOutput] = useState("")
const [youtubeURL , setYoutubeURL] = useState("")
const [question , setQuestion] = useState("")


  function  HandleClick() {
    setIsHidden(false)

    setOutput(<Loading/>)

    const fetchData = async () => {
      const app = await client("https://chai182-chat-with-youtube.hf.space/--replicas/jwzlp/");
      const result = await app.predict("/predict", [		
				{youtubeURL}, // string  in 'youtube_url' Textbox component		
				{question}, // string  in 'question' Textbox component
	]);

console.log(result.data);

setResponse(response = result.data)
console.log(response)

    if (response === null) {
      setOutput(<AlertBanner/>)
    } else {
      setOutput( <SuccessBanner showResponse={response} />)
    }


    };
    fetchData()
  } 

// const apiInput = {
//   "youtube_url" : {youtubeURL},
//   "question": {question}
// }



  return (
    <>
  <Header/>
  <div className="align">
    <DefaultInput input={youtubeURL} setInput={setYoutubeURL} classN="input1"  placeholder="Youtube URL"/>
    <DefaultInput input={question} setInput={setQuestion} classN="input2" placeholder="Question"/>
  </div>

  <div  className='button'>
    <TrailingIconButtons onClick={HandleClick} />
  </div>
  <div id='output' className={isHidden ? 'hidden' : ''}>
    {outPut}
  </div>

  <div className='mt-10'>
    <Hero/>
  </div>

  <p >build by <a className='text-green-500' href="https://github.com/Ahmet-Dedeler">ahmet🌱</a> and <a className='text-green-500'  href="https://github.com/arhaamwanii">arham🌱</a>.</p>
  
    </>
  )
}

export default App

//comment
//comment next day indeed
//indeed
//
////.
//
//
////.
//oo
//
//
//in the 
//
//
//
//
//..
////
//
//
//
//
//af
//weird asf
//

//bro i havent coeded in like 4 days tf in the, end this is not what i want to do bro is there a possibility in any way that we do this and we get the same attention as like eger 
//it
 
//
// wahi jahan
//
//
//
//in the end we all die dont we so we are going to make it to the other end if we dont we will have to it is this constant balttle with the inner self and the battle with the it is this notion that we are going to die that gives life // in th  eh end we all di  n 
//who are you to oppose reality stop doing thinggs you believe to be wrong, cause if you are lying about things

