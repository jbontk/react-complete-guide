import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';
import {useEffect} from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const {quoteId} = useParams();

  const {sendRequest, status, data: quote, error} = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);


  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
  if (status === 'pending') {
    return <div className='centered'><LoadingSpinner/></div>;
  }

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