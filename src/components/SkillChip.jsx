function SkillChip({ label, icon, active, onToggle }) {
  return (
    <button
      type="button"
      className={`skill-chip ${active ? 'is-active' : ''}`}
      onClick={() => onToggle(label)}
    >
      <span className="skill-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  )
}

export default SkillChip
