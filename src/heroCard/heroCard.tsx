import React from "react";

interface HeroCardProps {
    img: string;
    title: string;
}

function HeroCard({ img, title }: HeroCardProps) {
    return (
        <div>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </div>

    )
}

export default HeroCard 