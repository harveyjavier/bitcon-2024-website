import { useEffect, useRef } from "react";
import { frameCollection } from "./frames";

function Bitcon() {
  const index = useRef(0);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= frameCollection.length - 2) {
        clearInterval(interval);
      }

      if (container.current instanceof HTMLDivElement) {
        container.current!.innerHTML = frameCollection[index.current];
      }
      index.current++;
    }, 50);
  }, []);

  return (
    <div className="flex justify-center p-8">
      <div className="w-fit h-32 flex items-end" ref={container}></div>
    </div>
  );
}

export default Bitcon;
