import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="797173889688-of8nd1nsong3j3g1gnckqtn8hdacejn1.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
