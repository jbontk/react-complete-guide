import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
  const {quoteId} = useParams();
  const quotesObject = useSelector(({quotes}) => quotes);
  const quote = quotesObject[quoteId];


  return <section>
    <HighlightedQuote {...quote} />
  </section>;
};

export default QuoteDetail;