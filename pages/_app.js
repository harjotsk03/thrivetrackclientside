import "../styles/globals.css";
import { AlertProvider } from "../context/alertContext";
import Toast from "../components/Toast";

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <Toast />
      <Component {...pageProps} />
    </AlertProvider>
  );
}

export default MyApp;
