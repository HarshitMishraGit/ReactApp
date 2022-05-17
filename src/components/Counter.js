
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

import React,{useState} from 'react'

function Counter() {
    const now = Date.now()
    const thenDate= new Date("2022","04","22","12","20","00")
    const diff= thenDate-now
    const diffDate=Date.now()+diff
    const then = diffDate;//1653222000000;
    const data=calcTimeDelta(then,now)
    // console.log(data)
    
    // console.log(then);
    const [Days, setDays] = useState(data.days);
    const [Hours, setHours] = useState(data.hours);
    const [Minutes, setMinutes] = useState(data.minutes);
    const [Seconds, setSeconds] = useState(data.seconds);
    setInterval(() => {
        setDays(data.days)
        setHours(data.hours)
        setMinutes(data.minutes)
        setSeconds(data.seconds)
    }, 1000);
   


    return (
        <div className='flex flex-row justify-center mt-5 space-x-4'>
          
<div className='w-36 h-28 flex flex-row justify-center text-center my-au rounded-tr-lg bg-pink-700  px-2 py-3'><span className='text-white font-bold text-3xl'>{data.days}</span><span>Days</span></div>
<div className='w-36 h-28 flex flex-row justify-center text-center my-au rounded-tr-lg bg-pink-700  px-2 py-3'><span className='text-white font-bold text-3xl'>{data.hours}</span><span>Hr</span></div>
<div className='w-36 h-28 flex flex-row justify-center text-center my-au rounded-tr-lg bg-pink-700  px-2 py-3'><span className='text-white font-bold text-3xl'>{data.minutes}</span><span>minutes</span></div>
<div className='w-36 h-28 flex flex-row justify-center text-center my-au rounded-tr-lg bg-pink-700  px-2 py-3'><span className='text-white font-bold text-3xl'>{data.seconds}</span><span>seconds </span></div>
        </div>
    )

    }


export default Counter