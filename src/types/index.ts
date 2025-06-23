import { z } from 'zod'
import { CryptoCurrencySchema, CurrencySchema, PairSchema } from '../schema/crypto-schema';

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencySchema>
export type Pair = z.infer<typeof PairSchema>