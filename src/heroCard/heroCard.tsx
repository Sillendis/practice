import React from "react";
import styles from './heroCard.module.css'

interface HeroCardProps {
    img: string;
    title: string;
}

function HeroCard({ img, title }: HeroCardProps) {
    return (
        <div className={styles.ava}>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </div>

    )
}

export default HeroCard 