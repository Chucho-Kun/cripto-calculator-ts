import { create } from "zustand";
import { CryptoCurrenciesResponseSchema ,  } from './src/schema/crypto-schema';
import axios from "axios";
import type { Cryptocurrency } from "./src/types";


type CryptoStore = {
    cryptoCurrency: Cryptocurrency[],
    fetchCryptos: () => Promise<void>
}

async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data : { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if( result.success ){
        return result.data
    }
}

export const useCryptoStore = create <CryptoStore> (( set ) => ({
    cryptoCurrency: [],
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        console.log( {cryptoCurrency} )
        set ( { cryptoCurrency } )
    }
}))

