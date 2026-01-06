import Hero from "../components/Hero";
import SkillBar from "../components/SkillBar";
import aboutImg from "../assets/images/john-doe-about.jpg";

function Home() {
  return (
    <>
      <Hero />

      <section className="bg-light py-5">
        <div className="container">
          <div className="card shadow-sm p-4">
            <div className="row">

              {/* À PROPOS */}
              <div className="col-md-6">
                <h3 className="section-title">À propos</h3>

                <img
                  src={aboutImg}
                  alt="John Doe développeur web"
                  className="img-fluid mb-3 rounded"
                />

                <p>
                  Développeur web full stack, je conçois des sites et applications
                  modernes avec React et Bootstrap.
                </p>

                <p>
                  Actuellement en formation au CEF, je recherche une alternance
                  afin de développer mes compétences professionnelles.
                </p>
              </div>

              {/* COMPÉTENCES */}
              <div className="col-md-6">
                <h3 className="section-title">Mes compétences</h3>

                <SkillBar name="HTML5" value={90} color="bg-danger" />
                <SkillBar name="CSS3" value={80} color="bg-info" />
                <SkillBar name="JavaScript" value={70} color="bg-warning" />
                <SkillBar name="PHP" value={60} color="bg-success" />
                <SkillBar name="React" value={50} color="bg-primary" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
