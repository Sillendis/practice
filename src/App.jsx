import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import HeroCard from "./heroCard/heroCard";
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
        <HeroCard img={GG} title="Trailblazer" />
        <HeroCard img={Himeko} title="Himeko" />
        <HeroCard img={Welt} title="Welt" />
        <HeroCard img={Bronya} title="Bronya" />
        <HeroCard img={Gepard} title="Gepard" />
        <HeroCard img={Clara} title="Clara" />

        {showCharacters && (
          <>
            <HeroCard img={Topaz} title="Topaz" />
            <HeroCard img={Jade} title="Jade" />
            <HeroCard img={Aventurine} title="Aventurine" />
            <HeroCard img={Dr_Ratio} title="Dr.Ratio" />
            <HeroCard img={Black_Swan} title="Black Swan" />
            <HeroCard img={Acheron} title="Acheron" />
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
