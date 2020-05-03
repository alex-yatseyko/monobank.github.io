import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import uuid from 'uuid'

import 'jquery/dist/jquery.min.js'
// import 'popper/dist/popper.js'
// import 'jquery/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { getLanguage, LanguageContext } from "./context/language";
import { bankContext } from "./context/bankContext";

import codes from './data/codes.json'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Rates } from './pages/Rates'
import { All } from './pages/All'
import { Contact } from './pages/Contact'
import { NoMatch } from './pages/NoMatch'
import { Navbar } from './components/Navbar'

function App() {
  const [stateLanguage, dispatchLanguage] = useReducer((state, action) => {
      return {...getLanguage(action), lang: action};
  }, {...getLanguage("ua"), lang: "ua"});

  const [currencies, setCurrencies] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://api.monobank.ua/bank/currency')
      .then(response => response.json())
      .then(currencies => {
        setTimeout(() => {
          setCurrencies(currencies)
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <bankContext.Provider value={{currencies, codes, loading}}>
    <LanguageContext.Provider value={{language: stateLanguage, changeLanguage: dispatchLanguage}}>
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container jumbotron text-center mt-5">
          <Switch>
            <Route exact path="/" component={ Home }/> 
            <Route path="/about" component={ About }/> 
            <Route exact path="/exchange" component={ Rates }/> 
            <Route path="/contact" component={ Contact }/> 
            <Route path="/all" component={ All }/> 
            <Route component={ NoMatch } />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    </LanguageContext.Provider>
    </bankContext.Provider>
  );
}

export default App;
