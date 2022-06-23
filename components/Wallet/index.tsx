import { useEffect, useState } from "react";

import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { useIsMounted } from "../../hooks/useIsMounted";
import { formatAddress } from "../../web3/utils";

const Wallet = () => {
  const { data: accountData } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balanceData } = useBalance({
    addressOrName: accountData?.address,
  });

  const isMounted = useIsMounted();
  // const [requested, setRequested] = useState(false);

  // useEffect(() => {
  //   const checkNetwork = async () => {
  //     setRequested(true);
  //     if (window.ethereum) {
  //       const currentChainId = await window.ethereum.request({
  //         method: "eth_chainId",
  //       });

  //       if (currentChainId !== connectors[0].chains[0].name && !requested) {
  //         throw Error("Wrong Network");
  //       }
  //     }
  //   };

  //   if (accountData?.address) {
  //     checkNetwork().catch(async () => {
  //       if (!requested) {
  //         const res = await changeNetwork(connectors[0].chains[0]);
  //         res && connect(connectors[0]);
  //       }
  //     });
  //   }
  // }, [accountData]);

  return (
    <div>
      {accountData && isMounted ? (
        <div className="flex justify-around items-center text-center space-x-5">
          <div className="flex items-center justify-between space-x-4">
            <span className="font-bold text-base text-xl">
              {formatAddress(accountData.address!)}
            </span>
            <div className="stat">
              <div className="stat-title">Balance</div>
              <div className="stat-value text-xl text-primary">
                {parseFloat(balanceData?.formatted || "0").toFixed(3)}{" "}
                {balanceData?.symbol}
              </div>
            </div>
          </div>
          <button className="btn mr-2" onClick={() => disconnect()}>
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn mr-2"
            onClick={async () => {
              connect(connectors[0]);
            }}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Wallet;
