import { create } from "zustand";
import type { Cryptocurrency, Pair } from "./src/types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "./src/services/CryptoService";

type CryptoStore = {
    cryptoCurrency: Cryptocurrency[],
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : Pair ) => Promise<void>
}

export const useCryptoStore = create <CryptoStore> ()(devtools (( set ) => ({
    cryptoCurrency: [],
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        console.log( {cryptoCurrency} )
        set ( { cryptoCurrency } )
    },
    fetchData: async ( pair ) => {
        await fetchCurrentCryptoPrice( pair )
    }
})))

