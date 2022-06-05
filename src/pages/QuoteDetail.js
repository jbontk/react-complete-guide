import {Route, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const {quoteId} = useParams();
  const quotesObject = useSelector(({quotes}) => quotes);
  const quote = quotesObject[quoteId];

  if (!quote) {
    return <p>No quote Found!</p>;
  }


  return <section>
    <HighlightedQuote {...quote} />
    <Route path='/quotes/:quoteId/comments'>
      <Comments/>
    </Route>
  </section>;
};

export default QuoteDetail;