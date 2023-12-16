
import { useState } from 'react'
import './App.css'
import { DefaultInput } from './Components/Input'
import { TrailingIconButtons } from './Components/Button';
import { SuccessBanner } from './Components/Output';
import Header from './Components/Heder';
import { Hero } from './Components/Hero';
import { AlertBanner } from './Components/FialedOutput';

function App() {
const [response , setResponse] = useState(null);
const [isHidden, setIsHidden] = useState(true);
const [outPut , setOutput] = useState("")
const [youtubeURL , setYoutubeURL] = useState("")
const [question , setQuestion] = useState("")

  function HandleClick() {
    setIsHidden(false)
    



  const fetchData = async () => {
    try {

      //enter the api url here ---->>
      const apiUrl = `https://your-api-endpoint${apiInput}`;


  const apiResponse = await fetch(apiUrl, {
      method: 'POST', // or 'GET', 'PUT', etc.
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(apiInput),
    });

    if (apiResponse.ok) {
        const data = await apiResponse.json();
        setResponse(data); 
      } else {
        console.error('Error:', apiResponse.status, apiResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
        if (response === null) {
      setOutput(<AlertBanner/>)
    } else {
      setOutput( <SuccessBanner showResponse={response} />)
    }
};

fetchData()

  } 

const apiInput = {
  "youtube_url" : {youtubeURL},
  "question": {question}
}



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