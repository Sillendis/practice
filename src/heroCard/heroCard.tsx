import React from "react";

function HeroCard({ img, title }) {
    return (
        <div>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </div>

    )
}

export default HeroCard 