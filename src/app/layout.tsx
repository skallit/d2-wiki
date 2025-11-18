import { ReactNode } from "react";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>D2-Wiki</title>
      </head>
      <body>
        <h1>NavBar location test</h1>
        {props.children}
      </body>
    </html>
  );
}
