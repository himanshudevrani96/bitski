import { useWeb3React } from "@web3-react/core";
import "./App.css";
import * as Styled from "./style";
import MetaMaskCard from "./walletCards/MetamaskCard";
import PortisWalletCard from "./walletCards/PortisWalletCard";
import FormaticCard from "./walletCards/FortmaticCard";
import { connectors } from "./connectors/connectors";
import { Route, Routes } from "react-router-dom";
import Callback from "./walletCards/Callback";
import BitskiCard from "./walletCards/BitskiCard";

function App() {
  let allConnectors = connectors;
  const { connector, hooks } = useWeb3React();

  // console.log("connector", connector);
  // console.log("allConnectors", allConnectors);
  console.log("useWeb3React", useWeb3React());

  console.log("hooks", hooks.usePriorityConnector());

  return (
    <Routes>
      <Route path="/" element={
        <Styled.AppContainer>
          <MetaMaskCard />
          <PortisWalletCard />
          <FormaticCard />
          <BitskiCard/>
        </Styled.AppContainer>
      } />
      <Route path="/callback" element={<Callback />} />
    </Routes>

  );
}

export default App;
