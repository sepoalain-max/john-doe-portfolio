function Contact() {
  return (
    <section className="container my-5">
      {/* Titre */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact</h2>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="blue-line mx-auto mt-3"></div>
      </div>

      {/* Carte */}
      <div className="card contact-card p-4">
        <div className="row">
          {/* Formulaire */}
          <div className="col-md-6">
            <h5 className="fw-bold">
              Formulaire de contact
            </h5>
            <div className="blue-line mb-3"></div>

            <form>
              <input className="form-control mb-3" placeholder="Votre nom" />
              <input className="form-control mb-3" placeholder="Votre adresse email" />
              <input className="form-control mb-3" placeholder="Votre numéro de téléphone" />
              <input className="form-control mb-3" placeholder="Sujet" />
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Votre message"
              ></textarea>

              <button className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6">
            <h5 className="fw-bold">
              Mes coordonnées
            </h5>
            <div className="blue-line mb-3"></div>

            <p><strong>John Doe</strong></p>
            <p>40 rue Laure Diebold<br />69009 Lyon, France</p>
            <p>📞 10 20 30 40 50</p>
            <p>✉️ john.doe@gmail.com</p>

            <iframe
              title="map"
              className="w-100 mt-3"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
