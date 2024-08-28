import { useState, useEffect } from "react";

function useWindowResize() {
  // Initialize state with the current window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set the new window size to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Call handler immediately so state gets updated with initial window size
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return windowSize;
}

export default useWindowResize;
