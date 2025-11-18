import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <title>D2-Wiki</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"></link>
      </head>
      <body>
        <Header></Header>
        {props.children}
      </body>
    </html>
  );
}
