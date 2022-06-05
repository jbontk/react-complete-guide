import QuoteForm from '../components/quotes/QuoteForm';
import {useDispatch} from 'react-redux';
import {quotesActions} from '../store/quotes-slice';

const NewQuote = () => {

  const dispatch = useDispatch();
  const addQuoteHandler = ({text, author}) => {
    dispatch(quotesActions.addQuote({text, author}));
  };

  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuote;