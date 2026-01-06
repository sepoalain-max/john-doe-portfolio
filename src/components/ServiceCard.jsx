export default function ServiceCard({ title, text, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card service-card h-100 text-center p-3">
        <i className={`bi ${icon} fs-1 mb-3`}></i>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
