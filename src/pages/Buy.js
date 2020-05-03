import React, { useContext, useState } from 'react'

import { bankContext } from "../context/bankContext";
import Loader from '../components/Loader'

import {LanguageContext} from "../context/language";

export const Buy = () => {
    const text = useContext(LanguageContext)["language"]["exchange"];
    const { currencies, codes, loading } = useContext(bankContext)

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('')
    const [result, setResult] = useState('')

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
        selectValue ? setResult(selectValue * inputValue) : setResult('')
    }
    
    const onSelectChange = (e) => {
        setSelectValue(e.target.value)
        inputValue ? setResult(selectValue * inputValue): setResult('')
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
            <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select onChange={onSelectChange} defaultValue={'DEFAULT'} className="form-control" id="exampleFormControlSelect1">
                                <option value="DEFAULT" disabled>Select your option</option>
                                {currencies.length ? (
                                currencies.map(currency => {
                                return currency.rateSell && currency.currencyCodeB === 980 ? 
                                <option
                                className="list-group-item" 
                                value={currency.rateSell}
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
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Віддаєте</label>
                            <input value={inputValue} onChange={onChangeInput} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Put number here" />
                            <label htmlFor="exampleFormControlInput1">Отримаєте</label>
                            <p>{ result }</p>
                        </div>
                    </form>
                </div>
    )
}
