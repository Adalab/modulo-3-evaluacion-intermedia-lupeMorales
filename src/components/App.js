import "../styles/App.css";
import { useState } from "react";
import dataAPI from "../data/quotes.json";

function App() {
  const [data, setData] = useState(dataAPI);
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" });

  const handleNewQuote = (ev) => {
    setNewQuote({ ...newQuote, [ev.target.id]: ev.target.value });
  };

  const handleClickNewQuote = (ev) => {
    ev.preventDefault();
    console.log("reina del martes santo");
    setData([...data, newQuote]);
  };

  const renderQuotes = data.map((item, index) => {
    return (
      <li key={index}>
        <p>
          {item.quote} - {item.character}
        </p>
      </li>
    );
  });

  return (
    <div className="App">
      <h1>Frases de Friends</h1>
      <ul>{renderQuotes}</ul>
      <form>
        <h2>Añadir una nueva frase</h2>
        <label>Frase</label>
        <input
          type="text"
          name="quote"
          id="quote"
          value={newQuote.quote}
          onChange={handleNewQuote}
        ></input>
        <label>Personaje</label>
        <input
          type="text"
          name="character"
          id="character"
          value={newQuote.character}
          onChange={handleNewQuote}
        ></input>
        <input
          type="submit"
          value="ñAadir una nueva frase"
          onClick={handleClickNewQuote}
        ></input>
      </form>
    </div>
  );
}

export default App;
