function SkillBar({ name, value, color }) {
  return (
    <div className="mb-3">
      <small className="fw-bold">{name} {value}%</small>
      <div className="progress">
        <div
          className={`progress-bar ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
