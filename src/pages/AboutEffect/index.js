import { useEffect, useRef, useState } from "react";

function AboutEffect() {
  const [count, setCount] = useState(0);
  const [stopCount, setStopCount] = useState(5);
  const timer = useRef();
  const timeoutInterval = useRef();
  //
  const onNextCount = () => {
    setCount((prev) => prev + 1);
  };

  const onStartCount = () => {
    timer.current = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);
  };
  const onStartTimeout = () => {
    timeoutInterval.current = setInterval(() => {
      setStopCount((prev) => {
        return prev - 1;
      });
    }, 1000);
  };

  const onClearInterval = () => {
    clearInterval(timer.current);
  };
  // did mount
  useEffect(() => {
    // first render
    console.log("count did mount => ", count);
  }, []);
  // did update
  useEffect(() => {
    // every dependency change
    if (stopCount === 0) {
      clearInterval(timer.current);
      clearInterval(timeoutInterval.current);
      setStopCount(5);
    }
  }, [stopCount]);
  // will unmount
  useEffect(() => {
    // befor get out

    return () => {
      clearInterval(timer.current);
      console.log("count will unmount => ", count);
    };
  }, []);

  return (
    <div>
      <div style={{ fontSize: "48px" }}>count: {count}</div>
      <div>
        <button onClick={onStartCount}>start count</button>
      </div>
      <div>
        <button onClick={onStartTimeout}>
          stop count {stopCount !== 5 && `(${stopCount})`}
        </button>
      </div>
    </div>
  );
}

export default AboutEffect;
