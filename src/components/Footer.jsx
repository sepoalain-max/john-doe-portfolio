function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Colonne 1 : Infos */}
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p>123 Rue Exemple, Paris</p>
            <p>Tél : 0123456789</p>

            <div>
              {/* Bouton GitHub (ouvre la modale) */}
              <button
                className="btn btn-link text-white p-0 me-3"
                data-bs-toggle="modal"
                data-bs-target="#githubModal"
              >
                GitHub
              </button>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens */}
          <div className="col-md-4 mb-3">
            <h5>Liens</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/portfolio" className="text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li>
                <a href="/mentions-legales" className="text-white">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-4 mb-3">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-white">Projet 1</a></li>
              <li><a href="/portfolio" className="text-white">Projet 2</a></li>
              <li><a href="/portfolio" className="text-white">Projet 3</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
