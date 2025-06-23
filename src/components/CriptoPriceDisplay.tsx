import { useMemo } from "react"
import { useCryptoStore } from "../../store"
import Spiner from "./Spiner"


export default function CriptoPriceDisplay() {

    const { result , loading } = useCryptoStore()
    const hasResult = useMemo( () => !Object.values(result).includes('') ,[ result ])

  return (
    <div className="result-wrapper">
        { loading ? <Spiner /> : hasResult && (
            <>
            <h2>Cotización</h2>
            <div className="result">
                <img 
                    src={`https://cryptocompare.com/${ result.IMAGEURL }`}
                    alt="Imagen Cryptomoneda"
                />
                <div>
                    <p>El precio es de: <span>{ result.PRICE }</span></p>
                    <p>Precio más alto del día: <span>{ result.HIGHDAY }</span></p>
                    <p>Precio más bajo del día: <span>{ result.LOWDAY }</span></p>
                    <p>Variacion últimas 24 Horas: <span>{ result.CHANGEPCT24HOUR }</span></p>
                    <p>Ultima actualización: <span>{ result.LASTUPDATE }</span></p>
                </div>
            </div>      
            </>
        ) }
      
    </div>
  )
}
