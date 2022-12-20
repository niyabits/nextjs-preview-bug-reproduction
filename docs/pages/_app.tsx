import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    if (window.location.pathname === "/") {
      window.location.pathname = "/docs/";
      return null;
    }
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
