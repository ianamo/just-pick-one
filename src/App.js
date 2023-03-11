import React from "react";
import "./styles.css";
import { useState } from "react";
import Item from "./Item";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [items, setItem] = useState([]);
  const [itemText, setItemText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  function handleClick() {
    setItem((saved) => [...saved, itemText]);
    setItemText("");
  }

  function removeItem(id) {
    const myId = id;
    setItem((saved) => saved.filter((item, i) => i !== myId));
    setSelectedItem(null);
  }

  function pickRandom() {
    const pick = Math.floor(Math.random() * items.length);
    setSelectedItem(pick);
  }

  return (
    <div className="App">
      <Header />
      <input
        className="input-bar"
        type="text"
        placeholder="Add items to pick..."
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
      />{" "}
      <button id="add-btn" className="btn" onClick={handleClick}>
        +
      </button>
      <div className="item-container">
        {items.map((item, i) => (
          <Item
            key={i}
            id={i}
            name={item}
            deleteMethod={removeItem}
            selected={selectedItem}
          />
        ))}
      </div>
      <button className="btn" onClick={pickRandom}>
        JUST PICK
      </button>
      <Footer />
    </div>
  );
}
