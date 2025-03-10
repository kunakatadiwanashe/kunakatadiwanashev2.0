import Header from "@/components/Header";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function App({ Component, pageProps }) {

  return <>
  <Header />
    <main id="site-wrapper">
      <Component {...pageProps} />
    </main>
  </>
}
