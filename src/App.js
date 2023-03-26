import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function App() {
  function showTime(){
    let alaramSound=document.getElementById('alaramSound');
    let liveTimer=document.getElementById('liveTime');
    let hours=document.getElementById('hour').value;
    let minutes=document.getElementById('minutes').value;
    let selectedSession=document.getElementById('timeSelector').value;
    let time=new Date();
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();
    let session="AM"
    if(hh === 0){
      hh=12;
    }
    else{
      hh=hh-12;
      session="PM"
    }
    hh=(hh<10) ? "0" + hh : hh;
    mm=(mm<10) ? "0" + mm : mm;
    ss=(ss<10) ? "0" + ss: ss;
    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    
     liveTimer.innerHTML=`${hh}:${mm}:${ss} ${session}`;

     let alaram=`${hours}:${minutes} ${selectedSession}`;
     let live=`${hh}:${mm} ${session}`;


      (alaram === live) ? alaramSound.play() : alaramSound.pause();
   
      
    setTimeout(function(){showTime()},1000);  
  }

   useEffect(()=>{
    showTime()
   },[]);

 
  return (
    <div className="App container-fluid">
      <div className='timeWrapper'>

        <div className='row'>
        <span className='liveTimer' id="liveTime"></span>
        </div>

        <div className='row-6'>
        <input type="number" className='hours' max={12} id="hour" placeholder='HH'/>
        <input type="number" className='minutes' max={60} id="minutes" placeholder='MM'/>
        <select className='selector' id="timeSelector">
          <option value="AM" >AM</option>
          <option value="PM" >PM</option>
        </select>
        </div>

        <div className='row-4'>
        <button onClick={showTime} className='start btn btn-primary'>Start</button>
        </div>

        <div className='row-4'>
       <audio controls id="alaramSound" className='audio'>
        <source src="alaram.mp3" type="audio/mpeg"></source>
       </audio>
        </div>

      </div>
    </div>
  );


  
}

export default App;
