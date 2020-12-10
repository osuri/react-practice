import React, { useState, useEffect } from "react";

const CountDown = ({ initialTime }) => {
  const [timer, setTimer] = useState(initialTime);
  let time = initialTime * 60;
  useEffect(() => {
    setInterval(updateCounter, 1000);
  }, []);

  const updateCounter = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    time--;
    setTimer(`${minutes}: ${seconds}`);
  };
  return <h3>Counter {timer}</h3>;
};
export default CountDown;
