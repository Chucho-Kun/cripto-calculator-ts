import { useState, type ChangeEvent, type FormEvent } from "react"
import { useCryptoStore } from "../../store"
import { currencies } from "../data"
import type { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {

    const { cryptoCurrency , fetchData } = useCryptoStore()
    const [ error , setError ] = useState('')
    const [ pair , usePair ] = useState <Pair> ({
        currency: '',
        criptocurrency: ''
    })

    const handleChange = ( e: ChangeEvent<HTMLSelectElement>) => {
        usePair({
            ...pair,
            [ e.target.name ] : e.target.value
        })
    }

    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if( Object.values( pair ).includes('') ){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        // consultar api
        fetchData( pair )
    }

  return (
    <>
    
    <form className="form" 
        onSubmit={ handleSubmit }
        >
        { error && <ErrorMessage>{ error }</ErrorMessage> }
        <div>
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
                onChange={ handleChange }
                value={pair.currency}
            >
                <option value="">--- Seleccione</option>
               
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.code}-{currency.name}</option>
                ))}
            </select>
        </div>

        <div>
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select 
                name="criptocurrency" 
                id="criptocurrency"
                onChange={ handleChange }
                value={pair.criptocurrency}
            >
                <option value="">--- Seleccione</option>
                { cryptoCurrency.map( crypto => (
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{ crypto.CoinInfo.FullName }</option>
                ) ) }
            </select>
        </div>

        <input type="submit" value='Cotizar' />
    </form>
    </>
  )
}
