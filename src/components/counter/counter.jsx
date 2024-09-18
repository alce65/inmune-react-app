import { useState } from "react";
import "./counter.css";
export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1); // This is the line that is not covered by the test
  };

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
    </div>
  );
}
