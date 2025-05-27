import { currencies } from "../data"

export default function CriptoSearchForm() {
  return (
    <>
    
    <form className="form">
        <div>
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
            >
                <option value="">--- Seleccione</option>
               
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.code}-{currency.name}</option>
                ))}
            </select>
        </div>

        <div>
            <label htmlFor="criptocurrency">Cripto Moneda:</label>
            <select 
                name="criptocurrency" 
                id="criptocurrency"
            >
                <option value="">--- Seleccione</option>
            </select>
        </div>

        <input type="submit" value='Cotizar' />
    </form>
    </>
  )
}
