import { create } from "zustand";
import type { Cryptocurrency, CryptoPrice, Pair } from "./src/types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "./src/services/CryptoService";

type CryptoStore = {
    cryptoCurrency: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : Pair ) => Promise<void>
}

export const useCryptoStore = create <CryptoStore> ()(devtools (( set ) => ({
    cryptoCurrency: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        console.log( {cryptoCurrency} )
        set ( { cryptoCurrency } )
    },
    fetchData: async ( pair ) => {
        const result = await fetchCurrentCryptoPrice( pair )
        set( { loading: true } )
        set( { result , loading: false } )
        
    }
})))

