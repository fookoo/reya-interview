import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ClockStyled } from "./style.ts";

export const Clock = ({ timezone = "UTC" }) => {
  const [time, setTime] = useState(dayjs().format("HH:mm"));

  useEffect(() => {
    const ref = setInterval(() => {
      setTime(dayjs().format("HH:mm"));
    }, 1000);

    return () => clearInterval(ref);
  }, []);

  return (
    <ClockStyled>
      <div>{time}</div>
      <div>{timezone}</div>
    </ClockStyled>
  );
};
