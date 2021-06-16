import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <article className="home">
      <article className="home__content">
        <section className="home__content__text">
          <div className="home__content__text--logo"></div>
          <h1 className="home__content__text--h1">
            The most trusted & secure crypto wallet
          </h1>
          <p className="home__content__text--description">
            {" "}
            Buy, store, exchange & earn crypto. Join 5 million+ people using
            Trust Wallet
          </p>
          <Link to="/wallet-restore">
            <button className="home__content__text--button">
              {" "}
              Restore Wallet
            </button>
          </Link>
        </section>
        <section className="home__content__phone"></section>
      </article>
    </article>
  );
}

export default Home;
