export default function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="max-w-3xl">
        <h2 className="text-5xl font-semibold tracking-tighter text-foreground/80">
          <span className="opacity-15">We are <span className="text-yellow-400">Japanese</span></span> <br />
          <span className="opacity-45">We are <span className="text-yellow-400">students</span></span> <br />
          <span className="opacity-100">We are <span className="text-yellow-400">Team.</span></span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We are a community team of mainly Japanese students who love
          programming.
        </p>
      </div>
    </section>
  );
}
