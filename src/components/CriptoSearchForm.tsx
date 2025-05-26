export default function CriptoSearchForm() {
  return (
    <form>
        <div>
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
            >
                <option value="">--- Seleccione</option>
            </select>
        </div>
    </form>
  )
}
