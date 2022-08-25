const AddNewQuote = (props) => {
  const handleNewQuote = (ev) => {
    props.handleNewQuote(ev.target.value);
  };
  return (
    <form className="form form__container">
      <h2 className="form__title">Añadir una nueva frase:</h2>
      <p className="form__warning">{props.warning}</p>

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
          value={props.newQuote.quote}
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
          value={props.newQuote.character}
          onChange={handleNewQuote}
        ></input>
      </div>

      <input
        className="form__btn"
        type="submit"
        value="Añadir"
        onClick={props.handleClickNewQuote}
      ></input>
    </form>
  );
};
export default AddNewQuote;
