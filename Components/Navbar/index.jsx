import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { MdExplore } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TiUser } from "react-icons/ti";

const Navbar = (props) => {
  useEffect(() => {
    console.log(props.userdata);
  }, [props.userdata]);

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <ImQuotesLeft size="2.5rem" />
      </div>
      <div className={style.navLinks}>
        <a href="/">
          <MdExplore size={"2rem"} />
          Explore
        </a>
        <a
          onClick={() => {
            if (props.userdata !== null) {
              props.setOpenNewPost(true);
            } else {
              alert("Please Login to post a new Quote");
            }
          }}
        >
          <IoIosAddCircle size={"2rem"} />
          New Post
        </a>
      </div>
      <div className={style.login}>
        {props.userdata !== null ? (
          <>
            {props.userdata.profilepic === "" ||
            props.userdata.profilepic === null ? (
              <a>
                <TiUser size="2rem" />
                <span>{props.userdata.name}</span>
              </a>
            ) : (
              <a>
                <img
                  src={props.userdata.profilepic}
                  alt="profile"
                  className={style.profilepic}
                />
                <span>{props.userdata.name}</span>
              </a>
            )}

            <a onClick={() => props.setUserData(null)}>
              <FiLogOut size={"2rem"} />
              Logout
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
