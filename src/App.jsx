import { useEffect, useState } from 'react'
import './App.css'

const featureCards = [
  {
    title: 'AI-Powered',
    subtitle: 'Neural Matching',
    icon: 'brain',
    modifier: 'card-top',
  },
  {
    title: '98% Accuracy',
    subtitle: 'Skill Alignment',
    icon: 'chart',
    modifier: 'card-middle',
  },
  {
    title: 'Instant Results',
    subtitle: 'Career Roadmap',
    icon: 'rocket',
    modifier: 'card-bottom',
  },
]

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <main className="landing-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="topbar">
        <button
          type="button"
          className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
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
      </header>

      <section className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            AI CAREER INTELLIGENCE
          </p>

          <h1 className="brand-mark">MYTECHZ</h1>

          <h2 className="hero-title">
            Discover Your <em>Ideal</em> Career Path
          </h2>

          <p className="hero-description">
            Our neural matching engine analyses your skills, year, and branch
            to surface the career paths most aligned with your profile with
            precision.
          </p>

          <div className="stats-row" aria-label="Platform highlights">
            <div className="stat-item">
              <strong>12K+</strong>
              <span>Students Matched</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <strong>94%</strong>
              <span>Placement Rate</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <strong>40+</strong>
              <span>Career Paths</span>
            </div>
          </div>

          <div className="hero-actions">
            <button type="button" className="cta-button">
              <span>Begin Analysis</span>
              <span className="cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </button>
            <p className="hero-note">Takes about 2 minutes &bull; Free forever</p>
          </div>
        </div>

        <aside className="feature-stack" aria-label="Platform features">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className={`feature-card ${card.modifier}`}
            >
              <div className={`feature-icon feature-icon-${card.icon}`} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
        </aside>
      </section>
    </main>
  )
}

export default App
