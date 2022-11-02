import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import QuoteBox from "../Components/QuoteBox";
import RandomQuote from "../Components/RandomQuote";
import NewPost from "../Components/NewPost";

export default function Home(props) {
  const [userData, setUserData] = useState(null);
  const [quoteData, setQuoteData] = useState(props.quotes.data);
  const [israndomQuote, setIsRandomQuote] = useState(false);
  const [isnewPost, setIsNewPost] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Quotation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar
        userdata={userData}
        setUserData={setUserData}
        setOpenNewPost={setIsNewPost}
      />
      <Header
        setUserData={setUserData}
        userData={userData}
        isOpen={israndomQuote}
        setOpen={setIsRandomQuote}
      />

      <main className={styles.main}>
        <div style={{ width: "55%" }}>
          {quoteData.map((quote, key) => {
            return <QuoteBox quote={quote} key={key} />;
          })}
        </div>
      </main>
      <RandomQuote
        quote={props.randomquote.data}
        isOpen={israndomQuote}
        setOpen={setIsRandomQuote}
      />
      <NewPost isOpen={isnewPost} setOpen={setIsNewPost} />
    </div>
  );
}

export async function getStaticProps() {
  let fetchdata;
  try {
    fetchdata = await fetch(
      "https://quotation-server.vercel.app/api/get10quotes/?start=0"
    );
  } catch (err) {
    console.log(err);
  }
  const quotes = await fetchdata.json();
  try {
    fetchdata = await fetch(
      "https://quotation-server.vercel.app/api/randomquote"
    );
  } catch (err) {
    console.log(err);
  }
  const randomquote = await fetchdata.json();

  return {
    props: {
      quotes,
      randomquote,
    },
  };
}
