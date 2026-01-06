import banner from "../assets/images/banner.jpg";

export default function Banner({ title }) {
  return (
    <div
      className="banner d-flex align-items-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container text-center">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
