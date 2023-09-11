import { ReactNode, useState } from "react";

const Root = ({ children }: { children: ReactNode }) => {
  return <div id="app">{children}</div>;
};

export const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>add one</button>
    </div>
  );
};

const App = () => {
  return (
    <html>
      <head>
        <title>index</title>
      </head>
      <body>
        <Root>
          <Content />
        </Root>
      </body>
    </html>
  );
};

export default App;
