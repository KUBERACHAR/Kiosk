import FeatureCard from '../components/FeatureCard.jsx'
import { featureCards, landingStats } from '../data/landingData.js'
import '../styles/landing-page.css'

function LandingPage({ onBegin }) {
  return (
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
          Our neural matching engine analyses your skills, year, and branch to
          surface the career paths most aligned with your profile with
          precision.
        </p>

        <div className="stats-row" aria-label="Platform highlights">
          {landingStats.map((item, index) => (
            <div key={item.label} className="stat-group">
              <div className="stat-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
              {index < landingStats.length - 1 ? (
                <div className="stat-divider" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button type="button" className="cta-button" onClick={onBegin}>
            <span>Begin Analysis</span>
            <span className="cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </button>
          <p className="hero-note">Takes about 2 minutes</p>
        </div>
      </div>

      <aside className="feature-stack" aria-label="Platform features">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </aside>
    </section>
  )
}

export default LandingPage
