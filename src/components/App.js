import "../styles/App.css";
import { useState } from "react";
import dataAPI from "../data/quotes.json";

function App() {
  const [data, setData] = useState(dataAPI);
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" });
  const [inputFilterQuote, setInputFilterQuote] = useState("");

  const handleFilterQuote = (ev) => {
    setInputFilterQuote(ev.target.value);
  };
  const handleNewQuote = (ev) => {
    setNewQuote({ ...newQuote, [ev.target.id]: ev.target.value });
  };

  const handleClickNewQuote = (ev) => {
    ev.preventDefault();
    console.log("reina del martes santo");
    setData([...data, newQuote]);
    resetInput();
  };

  const renderQuotes = data
    .filter((item) => {
      return item.quote
        .toLowerCase()
        .includes(inputFilterQuote.toLocaleLowerCase());
    })
    .map((item, index) => {
      return (
        <li key={index}>
          <p>
            {item.quote} - {item.character}
          </p>
        </li>
      );
    });
  const resetInput = () => {
    setNewQuote({ quote: "", character: "" });
  };
  return (
    <div className="App">
      <h1>Frases de Friends</h1>
      <form>
        <label>Filtrar por frase</label>
        <input
          type="search"
          name="searchQuote"
          value={inputFilterQuote}
          onChange={handleFilterQuote}
        ></input>
      </form>

      <ul>{renderQuotes}</ul>
      <form>
        <h2>Añadir una nueva frase</h2>
        <label>Frase</label>
        <input
          type="text"
          name="quote"
          placeholder="Añade una frase..."
          id="quote"
          value={newQuote.quote}
          onChange={handleNewQuote}
        ></input>
        <label>Personaje</label>
        <input
          type="text"
          name="character"
          placeholder="Añade el personaje"
          id="character"
          value={newQuote.character}
          onChange={handleNewQuote}
        ></input>
        <input
          type="submit"
          value="Añadir una nueva frase"
          onClick={handleClickNewQuote}
        ></input>
      </form>
    </div>
  );
}

export default App;
