import { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Well come to header</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

export default Header;
