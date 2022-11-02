import React, { useState } from "react";
import style from "./NewPost.module.css";
import { IoMdAdd } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";

const NewPost = (props) => {
  const [Quote, setQuote] = useState();
  const [Author, setAuthor] = useState();
  const [PostStatus, setPostStatus] = useState("Post");

  const newPost = async () => {
    setPostStatus(
      <div style={{ width: "30px", display: "flex" }}>
        <img src="/spinner.gif" alt="Loading" width={"100%"} />
      </div>
    );
    let fetchdata;
    try {
      fetchdata = await fetch(
        `https://quotation-server.vercel.app/api/newpost?quote=${Quote}&author=${Author}`
      );
    } catch (err) {
      console.log(err);
    }
    const res = await fetchdata.json();
    console.log(res);
    if (res.data === true) {
      setQuote("");
      setAuthor("");
      setPostStatus("Posted");
    } else {
      setPostStatus("Post Again");
    }
  };

  return (
    <div
      className={style.wrapper}
      style={{ display: props.isOpen ? "flex" : "none" }}
    >
      <div className={style.header}>
        <h2>
          <ImQuotesLeft size="1.8rem" />
          <span>New Post</span>
        </h2>
        <div
          onClick={() => {
            props.setOpen(!props.isOpen);
            setAuthor("");
            setQuote("");
            setPostStatus("Post");
          }}
        >
          <IoMdAdd
            size="2.5rem"
            style={{ transform: "rotate(45deg)", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.quote}>
          <textarea
            name=""
            id=""
            cols="50"
            rows="20"
            placeholder="Tell What you are Thinking"
            value={Quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={style.author}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Author"
            value={Author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={style.footer}>
        <div className="btn" onClick={newPost}>
          {PostStatus}
        </div>
      </div>
    </div>
  );
};

export default NewPost;
