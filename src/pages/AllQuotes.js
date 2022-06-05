import QuoteList from '../components/quotes/QuoteList';
import {useSelector} from 'react-redux';

const AllQuotes = () => {
  const quotesObject = useSelector(({quotes}) => quotes);

  const quotes = Object.values(quotesObject).map(q => ({...q}));

  return <section>
    <QuoteList quotes={quotes}/>
  </section>;
};

export default AllQuotes;