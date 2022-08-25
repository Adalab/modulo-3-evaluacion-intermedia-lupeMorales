const QuoteItem = (props) => {
  return (
    <li className="quote__item" /* key={index} */>
      <p>
        {props.quoteData.quote} - {props.quoteData.character}
      </p>
    </li>
  );
};

export default QuoteItem;
