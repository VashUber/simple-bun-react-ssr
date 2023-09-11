import { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>index</title>
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
};
