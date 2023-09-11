import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Index page</h1>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>add one</button>
    </div>
  );
};

export default Page;
