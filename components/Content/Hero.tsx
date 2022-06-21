const Hero = () => {
  return (
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className={`text-5xl font-bold gradient`}>ZVoting</h1>
        <p className="py-6 prose">
          ZVoting is a voting dApp that allows user to vote among multiple
          options in a fear way through a decentralized voting system. Under the
          Hood Smart Contracts running on the Ethereum blockchain make this
          possible. 
        </p>
        <p className="prose">To continue, connect your Metamask Wallet.</p>
      </div>
    </div>
  );
};

export default Hero;
