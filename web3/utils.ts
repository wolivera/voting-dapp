import { Chain, chainId } from "wagmi";

export const chains: Chain[] = [
  {
    id: 1337,
    name: "development", // development | testnet | mainnet
    network: "testnet",
    rpcUrls: {
      default: "http://localhost:8545",
    },
  },
];

export const getChainId = () => {
  if (process.env.NEXT_PUBLIC_STAGE === 'localhost') {
    return chainId.localhost
  }
  return chainId.polygonMumbai;
}

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(36, 42)}`;
};
