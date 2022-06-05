import {Redirect, Route} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import store from './store';
import {Provider} from 'react-redux';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Provider store={store}>
      <MainNavigation/>
      <main>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes/>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
      </main>
    </Provider>);
}

export default App;
