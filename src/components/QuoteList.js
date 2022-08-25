import QuoteItem from "./QuoteItem";
const QuoteList = (props) => {
  const quoteElements = props.quoteData.map((item) => {
    return <QuoteItem quoteData={item} />;
  });
  return <ul className="quote__list">{quoteElements}</ul>;
};
export default QuoteList;
