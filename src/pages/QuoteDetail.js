import { Link, Route, Routes, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const { sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);


  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
  if (status === 'pending') {
    return <div className='centered'><LoadingSpinner /></div>;
  }

  if (!quote) {
    return <p>No quote Found!</p>;
  }


  return <>
    <HighlightedQuote {...quote} />
    <Routes>
      <Route index
      element={<div className='centered'>
          <Link to='comments' className='btn--flat'>Load Comments</Link>
        </div>} />
      <Route path='comments' element={<Comments />} />
    </Routes>
  </>
    ;
};

export default QuoteDetail;