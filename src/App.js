import { useState } from "react";
import styles from "./App.module.css";
import GG from "./assets/GG.png";
import Himeko from "./assets/Himeko.png";
import Welt from "./assets/Welt.png";
import Bronya from "./assets/Bronya.png";
import Gepard from "./assets/Gepard.png";
import Clara from "./assets/Clara.png";
import Topaz from "./assets/Topaz.png";
import Jade from "./assets/Jade.png";
import Aventurine from "./assets/Aventurine.png";
import Dr_Ratio from "./assets/Dr_Ratio.png";
import Black_Swan from "./assets/Black_Swan.png";
import Acheron from "./assets/Acheron.png";

function App() {
  const [showCharacters, setShowCharacters] = useState(false);

  const handleToggleCharacters = () => {
    setShowCharacters((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header_content}>
        <div className={styles.ava}>
          <img src={GG} alt="Trailblazer"></img>
          <h1>Trailblazer</h1>
        </div>

        <div className={styles.ava}>
          <img src={Himeko} alt="Himeko"></img>
          <h1>Himeko</h1>
        </div>

        <div className={styles.ava}>
          <img src={Welt} alt="Welt"></img>
          <h1>Welt</h1>
        </div>

        <div className={styles.ava}>
          <img src={Bronya} alt="Bronya"></img>
          <h1>Bronya</h1>
        </div>

        <div className={styles.ava}>
          <img src={Gepard} alt="Gepard"></img>
          <h1>Gepard</h1>
        </div>

        <div className={styles.ava}>
          <img src={Clara} alt="Clara"></img>
          <h1>Clara</h1>
        </div>
        {showCharacters && (
          <>
            <div className={styles.ava}>
              <img src={Topaz} alt="Topaz"></img>
              <h1>Topaz</h1>
            </div>

            <div className={styles.ava}>
              <img src={Jade} alt="Topaz"></img>
              <h1>Jade</h1>
            </div>

            <div className={styles.ava}>
              <img src={Aventurine} alt="Topaz"></img>
              <h1>Aventurine</h1>
            </div>
            <div className={styles.ava}>
              <img src={Dr_Ratio} alt="Topaz"></img>
              <h1>Dr.Ratio</h1>
            </div>
            <div className={styles.ava}>
              <img src={Black_Swan} alt="Topaz"></img>
              <h1>Black Swan</h1>
            </div>
            <div className={styles.ava}>
              <img src={Acheron} alt="Topaz"></img>
              <h1>Acheron</h1>
            </div>
          </>
        )}
      </header>
      <button onClick={handleToggleCharacters}>
        {showCharacters ? "HIDE OTHER CHARACTERS" : "SHOW OTHER CHARACTERS"}
      </button>
    </div>
  );
}

export default App;
