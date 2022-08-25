const QuoteItem = (props) => {
  return (
    <li className="quote__item" key={props.index}>
      <p>
        {props.quoteData.quote} - {props.quoteData.character}
      </p>
    </li>
  );
};

export default QuoteItem;
