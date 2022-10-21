import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { hooks as metamaskHooks, metamask } from "../allConnectors/metaMask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../allConnectors/walletConnect";

export const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metamask, metamaskHooks],
  [walletConnect, walletConnectHooks],
];

console.log("connectors", connectors);
