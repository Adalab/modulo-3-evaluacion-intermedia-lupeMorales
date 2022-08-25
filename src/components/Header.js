import "../styles/layout/Header.scss";
import Filters from "./Filters";
const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">Frases de Friends</h1>
      <Filters
        inputFilterQuote={props.inputFilterQuote}
        handleFilterQuote={props.handleFilterQuote}
        inputFilterCharacter={props.inputFilterCharacter}
        handleFilterCharacter={props.handleFilterCharacter}
      />
    </header>
  );
};
export default Header;
