import {useEffect, useState} from 'react';
import {URL_API, doApiGet} from '../services/apiService';
import CurrencyFieldComponent from './currencyFieldComponent';
import SwapComponent from './swapComponent';

export default function ExchangeComponent() {

    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [rate, setRate] = useState();
    const [amount, setAmount] = useState(1);
    const [fromCurrencyfeildChanged, setFromCurrencyfeildChanged] = useState(true);
 
    let toAmount, fromAmount;

    if (fromCurrencyfeildChanged){
        fromAmount = amount;
        toAmount = amount * rate;
    }else{
        toAmount = amount;
        fromAmount = amount / rate;
    }

    useEffect(()=>{
        doApi();
    }, []);

    useEffect(()=>{
        if(fromCurrency != null && toCurrency != null){
            updateApp();
        }
    }, [fromCurrency, toCurrency]);

    const doApi = async() => {
        let url = URL_API;
        let data = await doApiGet(url);
        let currency = Object.keys(data.quotes);
        setCurrencyOptions([...Object.keys(data.quotes)]);
        setFromCurrency(currency[0]);
        setToCurrency(currency[1]);
        setRate(data.quotes[currency[1]]);
    }

    const updateApp = async() => {
       
        let url = URL_API;
        let data = await doApiGet(url);
        setRate(data.quotes[toCurrency]/data.quotes[fromCurrency]);
    }

    function handleFromAmountChange(e){
        setAmount(e.target.value);
        setFromCurrencyfeildChanged(true);
    }

    function handleToAmountChange(e){
        setAmount(e.target.value);
        setFromCurrencyfeildChanged(false);
    }

    function handleSwap(){
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }
    

    return (
        <div>
            <CurrencyFieldComponent
            currencyOptions = {currencyOptions}
            selectedCurrency = {fromCurrency}
            onChangeCurrency = {e => setFromCurrency(e.target.value)}
            onChangeInput = {handleFromAmountChange}
            amount = {fromAmount}
            />
           <SwapComponent
                swapOptions = {handleSwap}
           />
            <CurrencyFieldComponent
            currencyOptions = {currencyOptions}
            selectedCurrency = {toCurrency}
            onChangeCurrency = {e => setToCurrency(e.target.value)}
            onChangeInput = {handleToAmountChange}
            amount = {toAmount}
            />
        </div>
    )
}
