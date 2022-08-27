import "../styles/App.scss";
import { useState, useEffect } from "react";
/* import dataJSON from "../data/quotes.json"; load datas from jason */
import dataAPI from "../services/api";
import localStorage from "../services/localStorage";
/* import QuoteList from './QuoteList'; */
//import components
import Header from "./Header";

import QuoteList from "./QuoteList";
import AddNewQuote from "./AddNewQuote";

function App() {
  /* const [data, setData] = useState(dataJSON);load datas from jason */
  const [data, setData] = useState(localStorage.get("quote", []));
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" });
  const [inputFilterQuote, setInputFilterQuote] = useState("");
  const [inputFilterCharacter, setInputFilterCharacter] = useState("all");
  const [warning, setWarning] = useState("");
  console.log(data);

  //hacemos peticion a API
  useEffect(() => {
    if (data.length === 0) {
      dataAPI().then((responseApi) => setData(responseApi));
    }
  }, []);

  //guardamos en localStore el resultado de la API, de modo que al cargar la página no hace la petición a la API salvo que el localStorege esté a O. De ahí el if del useEffect de la API
  useEffect(() => {
    localStorage.set("quote", data);
  }, [data]);

  //filtramos los datos de data para luegp hacer el map(que se hace en el componente)
  const quoteFilters = data
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
    });

  //guardamos valor cuando el imput cambia
  const handleFilterQuote = (inputValue) => {
    setInputFilterQuote(inputValue);
  };

  const handleFilterCharacter = (inputValue) => {
    setInputFilterCharacter(inputValue);
  };

  const handleNewQuote = (data) => {
    const inputId = data.id;
    const inputValue = data.value;

    setNewQuote({ ...newQuote, [inputId]: inputValue });
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

  const resetInput = () => {
    setNewQuote({ quote: "", character: "" });
  };

  const removeWarning = () => {
    setWarning("");
  };

  return (
    <div className="App">
      <Header
        inputFilterQuote={inputFilterQuote}
        handleFilterQuote={handleFilterQuote}
        inputFilterCharacter={inputFilterCharacter}
        handleFilterCharacter={handleFilterCharacter}
      />
      <QuoteList quoteData={quoteFilters} />
      <AddNewQuote
        warning={warning}
        newQuote={newQuote}
        handleNewQuote={handleNewQuote}
        handleClickNewQuote={handleClickNewQuote}
      />
    </div>
  );
}

export default App;
