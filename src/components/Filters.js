import FilterByQuote from "./FilterByQuote";
import FilterByCharacter from "./FilterByCharacter";
const Filters = (props) => {
  return (
    <form className="header__search">
      <FilterByQuote
        inputFilterQuote={props.inputFilterQuote}
        handleFilterQuote={props.handleFilterQuote}
      />
      <FilterByCharacter
        inputFilterCharacter={props.inputFilterCharacter}
        handleFilterCharacter={props.handleFilterCharacter}
      />
    </form>
  );
};
export default Filters;
