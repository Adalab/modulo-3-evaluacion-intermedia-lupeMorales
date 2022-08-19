import "../styles/App.css";
import { useState, useEffect } from "react";
/* import dataJSON from "../data/quotes.json"; load datas from jason */
import dataAPI from "../services/api";

function App() {
  // load datas from jason
  /* const [data, setData] = useState(dataJSON); */
  const [data, setData] = useState([]);

  const [newQuote, setNewQuote] = useState({ quote: "", character: "" });
  const [inputFilterQuote, setInputFilterQuote] = useState("");
  const [inputFilterCharacter, setInputFilterCharacter] = useState("--");

  useEffect(() => {
    dataAPI().then((responseApi) => setData(responseApi));
  }, []);

  const handleFilterQuote = (ev) => {
    setInputFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setInputFilterCharacter(ev.target.value);
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
      /*  item.character.includes(inputFilterCharacter) */
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
        <label htmlFor="filter">Filtrar por frase</label>
        <input
          type="search"
          name="searchQuote"
          value={inputFilterQuote}
          onChange={handleFilterQuote}
        ></input>
        <label htmlFor="filterCharacter">Filtrar por personaje</label>
        <select
          name="filterCharacter"
          id="filterCharacter"
          value={inputFilterCharacter}
          onChange={handleFilterCharacter}
        >
          <option>--</option>
          <option>Chandler</option>
          <option>Joey</option>
          <option>Monica</option>
          <option>Phoebe</option>
          <option>Rachel</option>
          <option>Ross</option>
        </select>
      </form>

      <ul>{renderQuotes}</ul>
      <form>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="quote">Frase</label>
        <input
          type="text"
          name="quote"
          placeholder="Añade una frase..."
          id="quote"
          value={newQuote.quote}
          onChange={handleNewQuote}
        ></input>
        <label htmlFor="char">Personaje</label>
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
