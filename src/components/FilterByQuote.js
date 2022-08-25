const FilterByQuote = (props) => {
  const handleFilterQuote = (ev) => {
    props.handleFilterQuote(ev.target.value);
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
      ></input>
    </>
  );
};
export default FilterByQuote;
