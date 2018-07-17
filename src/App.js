
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter } from 'react-router-dom';
import './styles/reduction.css';

import GAListener from './components/GAListener';

// routes
import Routes from './routes'

// react-redux
import { Provider } from 'react-redux'
import store from '../src/redux/store'

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    // console.log(store, ' <--- store')
    return (
      <Provider store={store}>
      <BrowserRouter basename={getBasename()}>
        <GAListener>
            <Routes />
        </GAListener>
      </BrowserRouter>
      </Provider>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
