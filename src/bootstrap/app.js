import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'

import Balance from '../containers/balance'
import PageNotFound from '../components/page-not-found'

import Initializer from './initializer'

import './app.css'

const App = ({ store, history, testElement }) => (
  <Provider store={store}>
    <Initializer>
      <ConnectedRouter history={history}>
        <div id="router-root">
          <Helmet>
            <title>Dapper</title>
          </Helmet>
          <div id="scroll-root">
            <Switch>
              <Route exact path="/" component={Balance} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          {testElement}
        </div>
      </ConnectedRouter>
    </Initializer>
  </Provider>
)

App.propTypes = {
  // State
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,

  // Testing
  testElement: PropTypes.element
}

App.defaultProps = {
  // Testing
  testElement: null
}

export default App
