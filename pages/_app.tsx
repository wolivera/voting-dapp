import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiProvider, createClient } from 'wagmi'
import { InjectedConnector } from "wagmi/connectors/injected";
import { chains } from '../web3/utils';

const client = createClient({
  autoConnect: true,
  connectors() {
    return [
      new InjectedConnector({
        chains,
      }),
    ];
  },
})

function VotingApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={client}>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default VotingApp;
