import "../styles/layout/QuoteList.scss";
import QuoteItem from "./QuoteItem";
const QuoteList = (props) => {
  const quoteElements = props.quoteData.map((item, index) => {
    return <QuoteItem key={index} quoteData={item} />;
  });
  return <ul className="quote__list">{quoteElements}</ul>;
};
export default QuoteList;
