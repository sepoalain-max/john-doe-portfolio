import heroBg from "../assets/images/hero-bg.jpg";

function Hero() {
  return (
    <header
      className="hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1 className="fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="mb-4">Développeur web full stack</h2>

        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#githubModal"
        >
          En savoir plus
        </button>
      </div>
    </header>
  );
}

export default Hero;
