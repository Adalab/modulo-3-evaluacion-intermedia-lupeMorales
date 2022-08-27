import "../styles/App.scss";
import { useState, useEffect } from "react";
/* import dataJSON from "../data/quotes.json"; load datas from jason */
import dataAPI from "../services/api";
import localStorage from "../services/localStorage";
/* import QuoteList from './QuoteList'; */

function App() {
  /* const [data, setData] = useState(dataJSON);load datas from jason */
  const [data, setData] = useState(localStorage.get("quote", []));
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" });
  const [inputFilterQuote, setInputFilterQuote] = useState("");
  const [inputFilterCharacter, setInputFilterCharacter] = useState("all");
  const [warning, setWarning] = useState("");
  console.log(data);
  useEffect(() => {
    if (data.lengh === 0) {
      dataAPI().then((responseApi) => setData(responseApi));
    }
  }, []);

  useEffect(() => {
    localStorage.set("quote", data);
  }, [data]);

  const handleFilterQuote = (ev) => {
    setInputFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setInputFilterCharacter(ev.target.value);
  };

  const handleNewQuote = (ev) => {
    setNewQuote({ ...newQuote, [ev.target.id]: ev.target.value });
  };
  const removeWarning = () => {
    setWarning("");
  };

  const handleClickNewQuote = (ev) => {
    ev.preventDefault();
    if (newQuote.quote === "" || newQuote.character === "") {
      setWarning("Revisa los campos");
      setTimeout(removeWarning, 3000);
    } else {
      setData([...data, newQuote]);
      setWarning("");
    }
    resetInput();
  };

  const renderQuotes = data
    .filter((item) => {
      return item.quote
        .toLowerCase()
        .includes(inputFilterQuote.toLocaleLowerCase());
    })
    .filter((item) => {
      if (inputFilterCharacter === "all") {
        return true;
      }
      return item.character === inputFilterCharacter;
    })

    .map((item, index) => {
      return (
        /*  <QuoteList
        className = "quote__item",
        key={index}/> */

        <li className="quote__item" key={index}>
          <p>
            {item.quote} - {item.character}
          </p>
        </li>
      );
    });
  const resetInput = () => {
    setNewQuote({ quote: "", character: "" });
  };
  const pressEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      return false;
    }
  };
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Frases de Friends</h1>
        <form className="header__search">
          <label className="header__label" htmlFor="filter">
            Filtrar por frase
          </label>
          <input
            className="header__text"
            type="search"
            name="searchQuote"
            value={inputFilterQuote}
            onChange={handleFilterQuote}
            onKeyDown={pressEnter}
          ></input>
          <label className="header__label" htmlFor="filterCharacter">
            Filtrar por personaje
          </label>
          <select
            className="header__text"
            name="filterCharacter"
            id="filterCharacter"
            value={inputFilterCharacter}
            onChange={handleFilterCharacter}
          >
            <option value="all">--</option>
            <option value="Chandler">Chandler</option>
            <option value="Joey">Joey</option>
            <option value="Monica">Monica</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Rachel">Rachel</option>
            <option value="Ross">Ross</option>
          </select>
        </form>
      </header>

      <ul className="quote__list">{renderQuotes}</ul>
      <form className="form form__container">
        <h2 className="form__title">Añadir una nueva frase:</h2>
        <p className="form__warning">{warning}</p>

        <div className="form__inputs">
          <label className="form__label" htmlFor="quote">
            Frase
          </label>
          <input
            className="form__text"
            type="text"
            name="quote"
            placeholder="Añade una frase"
            id="quote"
            value={newQuote.quote}
            onChange={handleNewQuote}
          ></input>
          <label className="form__label" htmlFor="char">
            Personaje
          </label>
          <input
            className="form__text"
            type="text"
            name="character"
            placeholder="Añade personaje"
            id="character"
            value={newQuote.character}
            onChange={handleNewQuote}
          ></input>
        </div>

        <input
          className="form__btn"
          type="submit"
          value="Añadir"
          onClick={handleClickNewQuote}
        ></input>
      </form>
    </div>
  );
}

export default App;
