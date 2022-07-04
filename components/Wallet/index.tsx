import toast from "react-hot-toast";

import { useAccount, useConnect, useDisconnect, useBalance, useNetwork } from "wagmi";
import { useIsMounted } from "../../hooks/useIsMounted";
import { formatAddress, getChainId } from "../../web3/utils";

const Wallet = () => {
  const { data: accountData, isFetching } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balanceData } = useBalance({
    addressOrName: accountData?.address,
  });
  const isMounted = useIsMounted();
  const { activeChain } = useNetwork();

  const isValidChain = !!(activeChain && activeChain.id === getChainId());
  if (isMounted && accountData && !isFetching && !isValidChain) {
    toast.error('Opps, wrong network!! Switch to Polygon Mumbai Testnet', { id: 'NETWORK_ERROR' });
  }

  return (
    <div>
      {accountData && isMounted && isValidChain ? (
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
