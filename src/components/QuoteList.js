import QuoteItem from "./QuoteItem";
const QuoteList = (props) => {
  const quoteElements = props.quoteData.map((item, index) => {
    return <QuoteItem quoteData={item} index={index} />;
  });
  return <ul className="quote__list">{quoteElements}</ul>;
};
export default QuoteList;
