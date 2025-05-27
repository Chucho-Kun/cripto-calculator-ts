import { create } from "zustand";

async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
}

export const useCryptoStore = create (() => ({
    fetchCryptos: () => {
        console.log('desde fetch cryptos')
    }
}))

