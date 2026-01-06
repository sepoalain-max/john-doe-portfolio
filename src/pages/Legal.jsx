import { Helmet } from "react-helmet-async";

function Legal() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="container my-5">
        {/* Titre */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mentions légales</h2>
          <div className="blue-line mx-auto mt-3"></div>
        </div>

        {/* Carte */}
        <div className="card p-4 shadow-sm">
          <div className="accordion" id="legalAccordion">

            {/* Éditeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editor"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="editor"
                className="accordion-collapse collapse"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p><strong>John Doe</strong></p>
                  <p>
                    40 rue Laure Diebold<br />
                    69009 Lyon, France
                  </p>
                  <p>📞 10 20 30 40 50</p>
                  <p>✉️ john.doe@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#host"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="host"
                className="accordion-collapse collapse"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p><strong>GitHub Pages</strong></p>
                  <p>
                    GitHub, Inc.<br />
                    88 Colin P Kelly Jr St, San Francisco
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="credits"
                className="accordion-collapse collapse show"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a
                      href="https://www.centre-europeen-formation.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Centre Européen de formation
                    </a>.
                  </p>

                  <p>
                    Les images utilisées sur ce site sont libres de droits et ont
                    été obtenues sur le site{" "}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>.
                  </p>

                  <p>
                    La favicon a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John Doe Icons – Freepik / Flaticon
                    </a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Legal;
 