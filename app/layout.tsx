import "../styles/globals.css";
import { Provider } from "./context";
import Navbar from "../comps/Navbar";
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Next App</title>
        <meta name="description" content="The Best Headphone" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
