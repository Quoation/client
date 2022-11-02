import React from "react";
import style from "./quotebox.module.css";

const QuoteBox = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.border}>
        <div className={style.quote}>
          <span>“{props.quote.quote}”</span>
        </div>
        <div className={style.author}>
          <span>-{props.quote.author}</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
