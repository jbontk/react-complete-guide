import {Redirect, Route, Switch} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import store from './store';
import {Provider} from 'react-redux';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
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
        </Switch>
      </Layout>
    </Provider>);
}

export default App;
