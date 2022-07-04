import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useLocation, useNavigate} from 'react-router-dom';

const QuoteList = (props) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';
  const nextSort = isAscending ? 'desc' : 'asc';

  const navigate = useNavigate();
  const changeSortingHandler = () => {
    return navigate({
      pathname: location.pathname,
      search: `sort=${nextSort}`
    });
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort by Author: {isAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.sort((q1, q2) => {
            if (isAscending) {
              return q1.author < q2.author ? -1 : 1;
            } else {
              return q1.author < q2.author ? 1 : -1;
            }
          }
        ).map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
