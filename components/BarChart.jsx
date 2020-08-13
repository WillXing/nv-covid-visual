import { useState, useEffect } from "react";

export default () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  return <p>Bar Chart: {time.toString()}</p>;
};
