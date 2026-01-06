import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";

// Images
import freshFood from "../assets/images/fresh-food.jpg";
import restaurant from "../assets/images/restaurant-japonais.jpg";
import bienEtre from "../assets/images/espace-bien-etre.jpg";
import seo from "../assets/images/seo.jpg";
import coder from "../assets/images/coder.jpg";
import screens from "../assets/images/screens.jpg";

export default function Portfolio() {
  const projects = [
    {
      image: freshFood,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
    },
    {
      image: restaurant,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
    },
    {
      image: bienEtre,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
    },
    {
      image: seo,
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
    },
    {
      image: coder,
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
    },
    {
      image: screens,
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
    },
  ];

  return (
    <>
      <Banner title="Portfolio" />

      <section className="container my-5">
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
