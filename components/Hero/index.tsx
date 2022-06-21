const Hero = () => {
  return (
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className={`text-5xl font-bold gradient`}>ZVoting</h1>
        <p className="py-6">
          ZVoting es una dApp de votación creada por el equipo Zircon.
          Para continuar conectá tu billetera Metamask.
        </p>
        <button className="btn btn-neutral">Conectar!</button>
      </div>
    </div>
  );
};

export default Hero;
