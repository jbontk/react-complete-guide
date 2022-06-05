import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const {quoteId} = useParams();
  const quotesObject = useSelector(({quotes}) => quotes);
  const quote = quotesObject[quoteId];

  if (!quote) {
    return <p>No quote Found!</p>;
  }


  return <>
    <HighlightedQuote {...quote} />
    <Route path={match.path} exact>
      <div className='centered'>
        <Link to={`${match.url}/comments`} className='btn--flat'>Add a Comment</Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <Comments/>
    </Route>
  </>
    ;
};

export default QuoteDetail;