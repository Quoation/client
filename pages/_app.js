import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "../Components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);
  const [isnewPost, setIsNewPost] = useState(false);
  return (
    <>
      <Navbar
        userdata={userData}
        setUserData={setUserData}
        setOpenNewPost={setIsNewPost}
      />
      <GoogleOAuthProvider clientId="797173889688-of8nd1nsong3j3g1gnckqtn8hdacejn1.apps.googleusercontent.com">
        <Component
          {...pageProps}
          setUserData={setUserData}
          userData={userData}
          isnewPost={isnewPost}
          setIsNewPost={setIsNewPost}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
