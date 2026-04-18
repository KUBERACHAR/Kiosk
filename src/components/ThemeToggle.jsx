function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      <span className="toggle-track">
        <span className="toggle-glow" />
        <span className="toggle-thumb">
          <span className="sun-icon" />
          <span className="moon-icon" />
        </span>
        <span className="toggle-label toggle-label-light">Light</span>
        <span className="toggle-label toggle-label-dark">Dark</span>
      </span>
    </button>
  )
}

export default ThemeToggle
