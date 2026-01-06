export default function ProjectCard({ image, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card project-card h-100">
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <button className="btn btn-primary">
            Voir le site
          </button>
        </div>
      </div>
    </div>
  );
}
