import { useEffect, useState } from "react";
import { hooks, portis } from "../allConnectors/portis";
import { Card } from "../components/Card";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function PortisWalletCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState<Error | undefined>(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    // void portis.connectEagerly().catch(() => {
    //   console.debug('Failed to connect eagerly to portis')
    // })
    // void portis.activate().catch(() => {
    //   console.debug('Failed to connect eagerly to metamask')
    // })

    console.log("portis", portis, portis.portis);

    if (portis.portis) {
      portis.portis.onLogin(
        (walletAddress: any, email: any, reputation: any) => {
          console.log(
            "walletAddress, email, reputation",
            walletAddress,
            email,
            reputation
          );
        }
      );
    }
  }, [isActive]);

  return (
    <Card
      connector={portis}
      chainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  );
}
