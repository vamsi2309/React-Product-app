// import { useEffect, useCallback } from "react";

// const useDebounceeEffect = (effect: any, deps: any, delay: any) => {
//   const callback = useCallback(effect, deps);

//   useEffect(() => {
//     const handler = setTimeout(callback, delay);
//     //cleanup
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [callback, delay]);
// };

// export default useDebounceeEffect;
import { useState, useEffect } from "react";

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
export default useDebounce;
