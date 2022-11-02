import React from "react";
import style from "./Header.module.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Header = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <span>Quotation</span>
      </div>
      <div className={style.login}>
        <div
          className="btn"
          style={{ fontFamily: '"Courier Prime", monospace' }}
          onClick={() => {
            props.setOpen(!props.isOpen);
          }}
        >
          get random quote
        </div>

        {props.userData === null ? (
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              await fetch(
                `https://quotation-server.vercel.app/api/login/?name=${decoded.name}&email=${decoded.email}&profilepic=${decoded.picture}&username=${decoded.given_name}&password=${decoded.sub}`
              ).then((res) => {
                res.json().then(async (data) => {
                  if (data.type === "login") {
                    await props.setUserData(data.data);
                  } else {
                    alert("You are Register now Please login");
                  }
                });
              });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
