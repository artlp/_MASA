import { useEffect } from "react";
import { useState } from "react";

export function Clock() {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    useEffect(() => {
        setDate(displayDate());
        setTime(displayTime());
        const interval = setInterval(() => setTime(displayTime(), 800));
        return () => {
            clearInterval(interval);
        }
    },[])

    const displayDate = () => {

        let currDate = new Date();
        let y = currDate.getFullYear();
        let m = currDate.getMonth() + 1;
        let d = currDate.getDate();

        let weekDay = weekDays[currDate.getDay()];

        return `${weekDay} | ${d}/${m}/${y}`;
    };

    const displayTime = () => {

        let currDate = new Date();
        let hour = ('0' + currDate.getHours()).slice(-2);
        let min = ('0' + currDate.getMinutes()).slice(-2);
        let sec = ('0' + currDate.getSeconds()).slice(-2);

        // other option, use
        // let timeStr = currDate.toTimeString();
        return `${hour}:${min}:${sec}`;
    };


    return (

        <div className="clock">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
        </div>
    );
}