import React, { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import data from "../cardData.js";

export default function Showcase() {
  const [cards, setCards] = useState(data);

  function zoom(event, id) {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return card.id === id
          ? {
              ...card,
              styles: {
                locX: event.clientX - event.target.offsetLeft,
                locY: event.clientY - event.target.offsetTop,
                transform: "scale(2)",
              },
            }
          : card;
      });
    });
  }

  function zoomOut(event, id) {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return card.id === id
          ? {
              ...card,
              styles: {
                ...card.styles,
                transform: "scale(1)",
              },
            }
          : card;
      });
    });
  }

  const cardData = cards.map((item) => (
    <ShowcaseCard key={item.id} {...item} zoom={zoom} zoomOut={zoomOut} />
  ));

  return <div className="showcase--wrapper">{cardData}</div>;
}
