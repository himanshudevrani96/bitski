import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";

interface ActivateProps {
  connector: MetaMask | WalletConnect;
  hooks: any;
}

export const useConnectWallet = () => {
  let chainId;
  let active;
  let account;

  const activate = ({ connector, hooks }: ActivateProps) => {
    try {
    } catch (error) {
      console.error("Activate Func error", error);
    }
  };

  const deactivate = () => {
    try {
    } catch (error) {
      console.error("Deactivate Func error", error);
    }
  };
};
