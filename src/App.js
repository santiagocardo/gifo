import React from 'react'
import { Route, Link, Switch } from 'wouter'

import './App.css'
import Home from './pages/home'
import SearchResults from './pages/search-results'
import Details from './pages/details'
import { GifsContextProvider } from './context/GifsContext'

const App = () =>
  (
    <div className="App">
      <section className="App-content">
        {/* <Header /> */}
        <Link to="/">
          <figure className="App-logo">
            <img alt='Giffy logo' src='/logo.svg' />
          </figure>
        </Link>
        <GifsContextProvider>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating" component={SearchResults} />
            <Route path="/gif/:id" component={Details} />
            <Route path="/404" component={() => <h1>404 ERROR :(</h1>} />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  )

export default App
