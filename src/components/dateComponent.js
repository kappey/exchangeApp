import React, {useState} from 'react';

export default function DateComponent() {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    
    const [currentTime , setCurrentTime] = useState(time);
    const [currentDate , setCurrentDate] = useState(date);

    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        date = new Date().toLocaleDateString();
        setCurrentTime(time);
        setCurrentDate(date);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <h4>{time}</h4>
            <h4>{date}</h4>
        </div>
    )
}
