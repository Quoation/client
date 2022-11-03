import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { MdExplore } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { TiUser } from "react-icons/ti";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <ImQuotesLeft size="2.5rem" />
      </div>
      <div className={style.navLinks}>
        <Link href="/">
          <MdExplore size={"2rem"} />
          Explore
        </Link>
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
              <Link href={"/userprofile"}>
                <TiUser size="2rem" />
                <span>{props.userdata.name}</span>
              </Link>
            ) : (
              <Link href={"/userprofile"}>
                <img
                  src={props.userdata.profilepic}
                  alt="profile"
                  className={style.profilepic}
                />
                <span>{props.userdata.name}</span>
              </Link>
            )}

            <a
              onClick={() => {
                if (router.pathname === "/userprofile") {
                  router.push("/");
                }
                props.setUserData(null);
              }}
            >
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
