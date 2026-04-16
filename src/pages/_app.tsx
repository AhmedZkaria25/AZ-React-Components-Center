import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
 
export default function App({ Component, pageProps }: AppProps) {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This only runs in the browser
  }, []);

  if (!isClient) return null; // Or a loading spinner

  return <BrowserRouter>
    <Component {...pageProps} />
  </BrowserRouter>
}