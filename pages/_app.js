import "@/styles/globals.css";
import { Navigate, NavBottom, Motion, Search } from "@/components/template";
import { styletron } from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import {useState} from "react";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [search, openSearch] = useState(false);
  console.log('search', search)
  return (
    <StyletronProvider value={styletron}>
      <AnimatePresence initial={ false } mode={ 'wait' }>
        <Motion key={router.pathname}>
          <Component {...pageProps} />
        </Motion>
      </AnimatePresence>
      <Navigate openSearch={openSearch} search={search}/>
      <NavBottom openSearch={openSearch} search={search}/>
      {search && <Search openSearch={openSearch}/>} 
      <Analytics/>
    </StyletronProvider>
  );
}
