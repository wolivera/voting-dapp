import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiProvider, createClient, configureChains, chain } from "wagmi";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { InjectedConnector } from "wagmi/connectors/injected";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
// import { chains } from "../web3/utils";
import { providers } from "ethers";

const { chains, provider } = configureChains(
  [chain.localhost],
  // [chain.polygonMumbai],
  [
    jsonRpcProvider({ rpc: () => ({ http: process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || '' }) }),
    publicProvider(),
  ]
);

// Provider that will be used when no wallet is connected (aka no signer)
// const provider = providers.getDefaultProvider("http://localhost:8545");

const client = createClient({
  autoConnect: true,
  connectors() {
    return [
      new InjectedConnector({
        chains,
      }),
    ];
  },
  provider,
});

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(
        "Network Error: Ensure MetaMask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});

function VotingApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default VotingApp;
