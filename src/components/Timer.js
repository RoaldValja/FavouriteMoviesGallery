import React from "react";

function Timer() {
    let currentTime = new Date().toLocaleTimeString();
    const [time, getTime] = React.useState(currentTime);

    function updateTime(){
        const updatedTime = new Date().toLocaleTimeString();
        getTime(updatedTime);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <h3>{time}</h3>
        </div>
    )
}

export default Timer;