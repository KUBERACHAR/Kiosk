import BackgroundEffects from './BackgroundEffects.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function PageShell({ children, isStudentMode, isDark, onThemeToggle }) {
  return (
    <main className={`landing-shell ${isStudentMode ? 'student-mode' : ''}`}>
      <BackgroundEffects />

      <header className="topbar">
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </header>

      {children}
    </main>
  )
}

export default PageShell
