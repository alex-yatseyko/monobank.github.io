import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import uuid from 'uuid'

// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

import codes from './data/codes.json'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Rates } from './pages/Rates'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import Loader from './components/Loader'

function App() {
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
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="container jumbotron text-center mt-5">
        <Switch>
          <Route exact path="/" component={ Home }/> 
          <Route path="/about" component={ About }/> 
          <Route path="/rates" component={ Rates }/> 
          <Route path="/contact" component={ Contact }/> 
        </Switch>
        <h3>HRYVNIA CURRENCY EXCHANGE RATES</h3>
        <ul className="list-group">
        {loading && <Loader />}
          {currencies.length ? (
            currencies.map(currency => {
            return currency.rateSell && currency.currencyCodeB === 980 ? 
              <li 
                className="list-group-item" 
                key={currency.currencyCodeA+currency.currencyCodeB}
              >
                <p>{codes.find(c => c.NumericCode === currency.currencyCodeA).AlphabeticCode}</p>
                <p>{codes.find(c => c.NumericCode === currency.currencyCodeA).Currency}</p>
                <p>{currency.rateSell}</p>
                <p>{currency.rateBuy}</p>
              </li> : null
            })
          ) : loading ? null : (
            <p>No currencies!</p>
          )}
        </ul>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Код</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Назва</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">Купівля</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">Продаж'</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-wrap mt-5">
          <button className="btn btn-lg btn-mono">Show all currencies</button>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
