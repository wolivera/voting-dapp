import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiProvider, createClient } from "wagmi";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { Toaster, toast } from "react-hot-toast";
import { InjectedConnector } from "wagmi/connectors/injected";
import { chains } from "../web3/utils";

const client = createClient({
  autoConnect: true,
  connectors() {
    return [
      new InjectedConnector({
        chains,
      }),
    ];
  },
});

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  // queryCache: new QueryCache({
  //   onError: (error) => {
  //     toast.error(
  //       "Network Error: Ensure MetaMask is connected to the same network that your contract is deployed to."
  //     );
  //   },
  // }),
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
