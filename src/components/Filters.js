import FilterByQuote from "./FilterByQuote";
import FilterByCharacter from "./FilterByCharacter";
const Filters = (props) => {
  return (
    <form className="header__search">
      <FilterByQuote
        inputFilterQuote={props.inputFilterQuote}
        handleFilterQuote={props.handleFilterQuote}
      />
      <FilterByCharacter />
    </form>
  );
};
export default Filters;
