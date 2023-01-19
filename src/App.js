
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import BlogPage from './containers/BlogPage';
import './App.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => {


  return (
    <Provider store={store} >
      <React.Fragment>
        <BlogPage />
      </React.Fragment>
    </Provider >

  );
}

export default App;
