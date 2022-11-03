import React from "react";
import style from "./profile.module.css";
import { TiUser } from "react-icons/ti";

const UserProfile = (props) => {
  return (
    <div className={style.wrapper}>
      <h1> Your Profile</h1>
      {props.userdata === null || props.userdata === undefined ? (
        <></>
      ) : (
        <div className={style.profile}>
          <div className={style.avatar}>
            {props.userdata.profilepic === "" ||
            props.userdata.profilepic === null ? (
              <TiUser size="5rem" />
            ) : (
              <img
                src={props.userdata.profilepic}
                alt="profile"
                className={style.profilepic}
              />
            )}
            <span className={style.name}>{props.userdata.username}</span>
          </div>
          <div>
            <div className={style.name}> Name: {props.userdata.name}</div>
            <div className={style.email}>Email: {props.userdata.email}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
