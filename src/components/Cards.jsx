import React, { useState } from "react";

import CardList from "./CardList";

const Cards = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 2,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 3,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 4,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 5,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 6,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 7,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
    {
      id: 8,
      img: "https://images.dog.ceo/breeds/dane-great/n02109047_26860.jpg",
      name: "John Doe",
      text: "Some example text some example text. John Doe is an architect and engineer",
      button: "See Profile",
    },
  ]);

  return (
    <div>
      <CardList card={card} setCard={setCard} />
    </div>
  );
};

export default Cards;
