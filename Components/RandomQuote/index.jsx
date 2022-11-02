import React, { useState } from "react";
import QuoteBox from "../QuoteBox";
import style from "./RandomQuote.module.css";
import { IoMdAdd } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const RandomQuote = (props) => {
  const [Quote, setQuote] = useState(props.quote);
  const [isCopied, setIsCopied] = useState(false);
  const [newQuoteStatus, setNewQuoteStatus] = useState("New Quote");

  const newQuote = async () => {
    setNewQuoteStatus(
      <div style={{ width: "30px", display: "flex" }}>
        <img src="/spinner.gif" alt="Loading" width={"100%"} />
      </div>
    );
    let fetchdata;
    try {
      fetchdata = await fetch(
        "https://quotation-server.vercel.app/api/randomquote"
      );
    } catch (err) {
      console.log(err);
    }
    const randomquote = await fetchdata.json();
    setQuote(randomquote.data);
    setNewQuoteStatus("New Quote");
  };

  return (
    <div
      className={style.wrapper}
      style={{ display: props.isOpen ? "flex" : "none" }}
    >
      <div className={style.header}>
        <h2>Random Quote</h2>
        <div
          onClick={() => {
            props.setOpen(!props.isOpen);
            setIsCopied(false);
          }}
        >
          <IoMdAdd
            size="2.5rem"
            style={{ transform: "rotate(45deg)", cursor: "pointer" }}
          />
        </div>
      </div>
      <QuoteBox quote={Quote} />
      <div className={style.footer}>
        <div className="btn" onClick={newQuote}>
          {newQuoteStatus}
        </div>
        <div
          className="btn"
          onClick={() => {
            navigator.clipboard.writeText(Quote.quote);
            setIsCopied(true);
          }}
        >
          <MdContentCopy size={"1.5rem"} />
          {isCopied ? <span>Copied</span> : <span></span>}
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
