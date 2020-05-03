import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { bankContext } from "../context/bankContext";
import Loader from '../components/Loader'

import {LanguageContext} from "../context/language";

export const Home = () => {
    const { currencies, codes, loading } = useContext(bankContext)
    const text = useContext(LanguageContext)["language"]["home"];

    return (
            <div className="container">
                <h1>{text.title}</h1>
                <ul className="list-group mt-5">
          {loading && <Loader />}
          {currencies.length ?
          <li className="list-group-item">
              <p>{text.code}</p>
              <p>{text.name}</p>
              <p>{text.buy}</p>
              <p>{text.sell}</p>
            </li> : null}
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
          {currencies.length ?
          <div className="btn-wrap mt-5">
          <Link to="/all">
              <button className="btn btn-lg btn-mono">{text.all}</button>
          </Link>
        </div> : null}
            </div>
    )
}
