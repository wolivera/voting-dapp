import { Chain } from "wagmi";

export const chains: Chain[] = [
  {
    id: 1337,
    name: "development", // development | testnet | mainnet
    rpcUrls: {
      default: "http://localhost:8545",
    },
  },
];

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(36, 42)}`;
};
