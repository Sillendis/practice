import { useState } from "react";
import styles from "./App.module.css";
import GG from "./assets/GG.png";
import Himeko from "./assets/Himeko.png";
import Welt from "./assets/Welt.png";
import Bronya from "./assets/Bronya.png";
import Gepard from "./assets/Gepard.png";
import Clara from "./assets/Clara.png";

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header_content}>
        <div className={styles.ava}>
          <img src={GG} alt="Trailblazer"></img>
          <h1>Trailblazer</h1>
        </div>

        <div className={styles.ava}>
          <img src={Himeko} alt="Trailblazer"></img>
          <h1>Himeko</h1>
        </div>

        <div className={styles.ava}>
          <img src={Welt} alt="Trailblazer"></img>
          <h1>Welt</h1>
        </div>

        <div className={styles.ava}>
          <img src={Bronya} alt="Trailblazer"></img>
          <h1>Bronya</h1>
        </div>

        <div className={styles.ava}>
          <img src={Gepard} alt="Trailblazer"></img>
          <h1>Gepard</h1>
        </div>

        <div className={styles.ava}>
          <img src={Clara} alt="Trailblazer"></img>
          <h1>Clara</h1>
        </div>
      </header>
      <button>SHOW OTHER CHARACTERS</button>
    </div>
  );
}

export default App;
