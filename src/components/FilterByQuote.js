const FilterByQuote = (props) => {
  const handleFilterQuote = (ev) => {
    props.handleFilterQuote(ev.target.value);
  };
  const pressEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      return false;
    }
  };
  return (
    <>
      <label className="header__label" htmlFor="filter">
        Filtrar por frase
      </label>
      <input
        className="header__text"
        type="search"
        name="searchQuote"
        value={props.inputFilterQuote}
        onChange={handleFilterQuote}
        onKeyDown={pressEnter}
      ></input>
    </>
  );
};
export default FilterByQuote;
