import QuoteForm from '../components/quotes/QuoteForm';
import {useDispatch} from 'react-redux';
import {quotesActions} from '../store/quotes-slice';
import {useHistory} from 'react-router-dom';

const NewQuote = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  const addQuoteHandler = ({text, author}) => {
    dispatch(quotesActions.addQuote({text, author}));

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuote;