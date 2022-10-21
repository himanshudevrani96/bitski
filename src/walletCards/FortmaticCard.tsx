import { useEffect, useState } from "react";
import { hooks, fortmatic } from "../allConnectors/fortmatic";
import { Card } from "../components/Card";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function FormaticCard() {
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
    console.log("fortmatic", fortmatic);
  }, [isActive]);

  return (
    <Card
      connector={fortmatic}
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
