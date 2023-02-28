import { useEffect, useState } from "react";
 
export default function Countdown(){

const calculateTimeLeft = () => {
    const difference = +new Date("2023-03-02T12:09:05+00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
	
        return(
     <>
     <div className="font-LuckiestGuy text-white w-ful h-full text-xl text-center">
      <p>
        <span>{timeLeft.hours}</span>
        <span>:</span>
        <span>{timeLeft.minutes}</span>
        <span>:</span>
        <span>{timeLeft.seconds}</span>
      </p>
    </div>
     </>
    )
}
