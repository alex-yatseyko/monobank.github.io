import React, { useContext, useState } from 'react'
import exchange from '../exchange.svg'

import {LanguageContext} from "../context/language";
import { bankContext } from "../context/bankContext";

export const Rates = () => {
    const text = useContext(LanguageContext)["language"]["exchange"];
    const { currencies, codes, loading } = useContext(bankContext)
    const [ sell, setSell ] = useState( false )
    const [ rate, setRate ] = useState( false )
    const [ showRate, setShowRate ] = useState( false )
    const [ imgChangeStyle, setImgChangeStyle ] = useState(false)
    const [ currencyAmount, setCurrencyAmount ] = useState()
    const [ uah, setUah ] = useState()

    const onCurrencyChange = (e) => {
        const thisRate = JSON.parse(e.target.value)
        setRate(thisRate)
        setShowRate(true)
    }
    const change = () => {
        setImgChangeStyle(!imgChangeStyle)
        setSell(!sell)
        setUah('')
        setCurrencyAmount('')
    }
    const changeCurrencyAmount = (e) => {
        if(rate){ 
            const value = e.target.value
            const currentRate = sell ? rate.sell : rate.buy
            setCurrencyAmount(value)
            setUah((value * currentRate).toPrecision(7))
        } else {
            return ''
        }
    }
    const changeUah = (e) => {
        if(rate){ 
            const value = e.target.value
            const currentRate = sell ? rate.sell : rate.buy
            setUah(value)
            setCurrencyAmount((value / currentRate).toPrecision(7))   
        } else {
            return ''
        }
    }

    return (
            <div className="container">
                <h1>{text.title}</h1>
                <div className="row exchange-row mt-5" className={ imgChangeStyle ? 'reversed row exchange-row mt-5' : 'row exchange-row mt-5' }>
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">{ imgChangeStyle ? 'Я отримаю' : 'Я маю'}</label>
                                <div className="row">
                                <input onChange={ changeCurrencyAmount } value={ currencyAmount } type="number" className="form-control" id="exampleFormControlInput1" placeholder="0" />
                                    
                                    <select autoFocus onChange={ onCurrencyChange } defaultValue={'DEFAULT'} className="form-control" id="exampleFormControlSelect1">
                                        <option value="DEFAULT" disabled>Select currency</option>
                                        {currencies.length ? (
                                        currencies.map(currency => {
                                            return currency.rateSell && currency.currencyCodeB === 980 ? 
                                            <option
                                            className="list-group-item" 
                                            value={JSON.stringify({ sell: currency.rateSell, buy: currency.rateBuy, code: codes.find(c => c.NumericCode === currency.currencyCodeA).AlphabeticCode })}
                                            key={currency.currencyCodeA+currency.currencyCodeB}
                                            >
                                            {codes.find(c => c.NumericCode === currency.currencyCodeA).AlphabeticCode}
                                            </option> : null
                                        })
                                    ) : loading ? null : (
                                        <p>No currencies!</p>
                                    )}
                                    </select>
                                </div>
                                { showRate ? <label htmlFor="exampleFormControlSelect1">{ sell ? `1 ${rate.code} = ${ rate.sell }` : `1 ${rate.code} = ${ rate.buy }` }</label> : ''}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1 exchange-col">
                        <img className={ imgChangeStyle ? 'rotated' : '' } onClick={ change } src={exchange} alt="exchange"/>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">{ imgChangeStyle ? 'Я маю' : 'Я отримаю' }</label>
                                <div className="row">
                                    <input onChange={ changeUah } value={ uah } type="number" className="form-control" id="exampleFormControlInput2" placeholder="0" />
                                    <p className="ua-currency">UAH</p>

                                    

                                </div>
                                { showRate ? <label htmlFor="exampleFormControlSelect1">{ sell ? `1 UAH = ${ (1 / rate.sell).toPrecision(3) }` : `1 UAH = ${ (1 / rate.buy).toPrecision(3) }`  }</label> : ''}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-wrap mt-5">
                            {/* <Link to="/exchange/sell"> */}
                                <button className="btn btn-lg btn-mono">{ sell ? text.sell : text.buy}</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}