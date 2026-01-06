import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="services-hero"></section>

      {/* Contenu */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold">Mon offre de services</h2>
        <p className="text-muted">
          Voici les prestations sur lesquelles je peux intervenir
        </p>

        <div className="blue-line mx-auto my-3"></div>

        <div className="row mt-5">
          <ServiceCard
            icon="bi-pencil"
            title="UX Design"
            text="L'UX Design consiste à concevoir des interfaces centrées utilisateur, agréables et efficaces."
          />

          <ServiceCard
            icon="bi-code-slash"
            title="Développement web"
            text="Création de sites web modernes avec HTML, CSS, JavaScript, React et Bootstrap."
          />

          <ServiceCard
            icon="bi-search"
            title="Référencement"
            text="Optimisation du référencement naturel (SEO) pour améliorer la visibilité sur Google."
          />
        </div>
      </section>
    </>
  );
}

export default Services;
