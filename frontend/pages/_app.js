import Header from "@/components/Header";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ResponsiveMenu from "@/components/Navbar";



export default function App({ Component, pageProps }) {

  return <>
 
  <ResponsiveMenu />
    <main id="site-wrapper">
      <Component {...pageProps} />
    </main>
  </>
}
