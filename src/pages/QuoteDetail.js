import {Link, Route, useParams} from 'react-router-dom';
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


  return <>
    <HighlightedQuote {...quote} />
    <Route path='/quotes/:quoteId' exact>
      <div className='centered'>
        <Link to={`/quotes/${quoteId}/comments`} className='btn--flat'>Add a Comment</Link>
      </div>
    </Route>
    <Route path='/quotes/:quoteId/comments'>
      <Comments/>
    </Route>
  </>
    ;
};

export default QuoteDetail;