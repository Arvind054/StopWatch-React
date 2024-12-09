import React, { useRef, useState } from 'react'
import './CSS/timer.css'
const Timer = () => {
  let timeRef = useRef(null);
  let minRef = useRef(0);
  let hourRef = useRef(0);
  const [isActive, setIsActive] = useState(false);
  let [sec, setSec] = useState(0);
  function handleMin(){
       if(minRef.current === 59){
            handleHour();
       }else{
      minRef.current = minRef.current +1;
      setSec(0);
       }
  }
  function handleHour(){
    hourRef.current = hourRef.current+1;
    minRef.current = 0;
    setSec(0);
  }
  function handleSeconds(){
      setSec(sec=>sec+1);
  }
  function handleStart(){
    setIsActive(true);
     timeRef.current = setInterval(() => {
        handleSeconds();
     }, 1000);
  }
  function handleStop(){
    setIsActive(false);
       clearInterval(timeRef.current);
       timeRef.current = null;
  }
  function handleReset(){
    if(timeRef.current != null){
      handleStop();
    }
     hourRef.current = 0;
     minRef.current = 0;
     setSec(0);
  }
  return (
    <div className='timer'>
      <h2>StopWatch</h2>
       {sec === 60 ? handleMin(): ""}
       <div className="contents">
         <div className="hours timeElement"> {hourRef.current}  </div>
          : 
         <div className="minutes timeElement"> {minRef.current} </div>
         :
         <div className="seconds timeElement">{sec} </div>
         </div>
         <div className="buttons">
          {isActive ? <button onClick={handleStop} className='btn' >Stop</button> :<button onClick={handleStart} className='btn' >Start</button>  }
         <button onClick={handleReset} className='btn' >Reset</button>
         </div>
    </div>
  )
}

export default Timer
