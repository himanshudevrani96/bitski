import { initializeConnector } from '@web3-react/core'
import { BitskiConnect } from '../packages/bitski'

const CLIENTID = 'a1d57ae2-3404-49dc-a848-edc39463c4fc'
const callBackUrl = 'https://bitski-nine.vercel.app/callback'
const network = {
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com',
    chainId: 80001,
}
const params: any = {
    CLIENTID,
    callBackUrl,
    network
}

export const [bitski, hooks] = initializeConnector<BitskiConnect>((actions) => new BitskiConnect({ actions, options: params }))
