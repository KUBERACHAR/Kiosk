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

const academicYears = ['1st Year', '2nd Year', '3rd Year', '4th Year']

const branches = [
  'Computer Science Engineering',
  'Information Technology',
  'Electronics and Communication',
  'Electrical and Electronics',
  'Mechanical Engineering',
  'Civil Engineering',
]

const skillOptions = [
  { label: 'Python', icon: 'Py' },
  { label: 'JavaScript', icon: 'JS' },
  { label: 'Machine Learning', icon: 'ML' },
  { label: 'Data Analysis', icon: 'DA' },
  { label: 'React / Vue', icon: 'UI' },
  { label: 'SQL / Databases', icon: 'DB' },
  { label: 'Cloud (AWS/GCP)', icon: 'CL' },
  { label: 'Deep Learning', icon: 'DL' },
  { label: 'DevOps / CI-CD', icon: 'DV' },
  { label: 'Cybersecurity', icon: 'CS' },
  { label: 'Embedded Systems', icon: 'ES' },
  { label: 'IoT', icon: 'IoT' },
  { label: 'Mobile (Flutter)', icon: 'MB' },
  { label: 'Blockchain', icon: 'BC' },
  { label: 'UI/UX Design', icon: 'UX' },
  { label: 'Digital Marketing', icon: 'DM' },
  { label: 'Robotics', icon: 'RB' },
  { label: 'NLP / LLMs', icon: 'AI' },
  { label: 'Computer Vision', icon: 'CV' },
  { label: 'Networking', icon: 'NW' },
]

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

function LandingView({ onBegin }) {
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
          <button type="button" className="cta-button" onClick={onBegin}>
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
          <article key={card.title} className={`feature-card ${card.modifier}`}>
            <div className={`feature-icon feature-icon-${card.icon}`} />
            <div>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </article>
        ))}
      </aside>
    </section>
  )
}

function StudentInfoView({
  fullName,
  selectedYear,
  selectedBranch,
  selectedSkills,
  onBack,
  onNameChange,
  onYearSelect,
  onBranchSelect,
  onSkillToggle,
}) {
  const isReady =
    fullName.trim() && selectedYear && selectedBranch && selectedSkills.length > 0

  return (
    <section className="student-shell">
      <header className="profile-header">
        <div className="profile-heading-wrap">
          <button type="button" className="back-button" onClick={onBack}>
            <span aria-hidden="true">&larr;</span>
          </button>
          <div>
            <h1 className="profile-title">Your Profile</h1>
            <p className="profile-subtitle">
              Tell us about yourself to personalise your results
            </p>
          </div>
        </div>
        <span className="step-pill">Step 1 of 2</span>
      </header>

      <div className="profile-grid">
        <section className="profile-card">
          <p className="field-label">FULL NAME</p>
          <input
            className="profile-input"
            type="text"
            placeholder="e.g. Arjun Sharma"
            value={fullName}
            onChange={(event) => onNameChange(event.target.value)}
          />
        </section>

        <section className="profile-card">
          <p className="field-label">ACADEMIC YEAR</p>
          <div className="year-grid">
            {academicYears.map((year) => (
              <button
                key={year}
                type="button"
                className={`year-pill ${selectedYear === year ? 'is-selected' : ''}`}
                onClick={() => onYearSelect(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </section>

        <section className="profile-card">
          <p className="field-label">BRANCH / DEPARTMENT</p>
          <div className="select-wrap">
            <select
              className="profile-select"
              value={selectedBranch}
              onChange={(event) => onBranchSelect(event.target.value)}
            >
              <option value="">-- Select Branch --</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </section>
      </div>

      <section className="skills-card">
        <div className="skills-header">
          <p className="field-label">SKILLS &amp; INTERESTS</p>
          <span className="selection-pill">{selectedSkills.length} Selected</span>
        </div>

        <div className="skills-grid">
          {skillOptions.map((skill) => {
            const active = selectedSkills.includes(skill.label)

            return (
              <button
                key={skill.label}
                type="button"
                className={`skill-chip ${active ? 'is-active' : ''}`}
                onClick={() => onSkillToggle(skill.label)}
              >
                <span className="skill-icon" aria-hidden="true">
                  {skill.icon}
                </span>
                <span>{skill.label}</span>
              </button>
            )
          })}
        </div>
      </section>

      <div className="student-actions">
        <button
          type="button"
          className="cta-button"
          disabled={!isReady}
          title={isReady ? 'Profile ready' : 'Fill your details to continue'}
        >
          <span>Analyse My Profile</span>
          <span className="cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </div>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState('light')
  const [screen, setScreen] = useState('landing')
  const [fullName, setFullName] = useState('')
  const [selectedYear, setSelectedYear] = useState('3rd Year')
  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedSkills, setSelectedSkills] = useState([])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  const handleSkillToggle = (label) => {
    setSelectedSkills((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  return (
    <main className={`landing-shell ${screen === 'student' ? 'student-mode' : ''}`}>
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="topbar">
        <ThemeToggle
          isDark={isDark}
          onToggle={() => setTheme(isDark ? 'light' : 'dark')}
        />
      </header>

      {screen === 'landing' ? (
        <LandingView onBegin={() => setScreen('student')} />
      ) : (
        <StudentInfoView
          fullName={fullName}
          selectedYear={selectedYear}
          selectedBranch={selectedBranch}
          selectedSkills={selectedSkills}
          onBack={() => setScreen('landing')}
          onNameChange={setFullName}
          onYearSelect={setSelectedYear}
          onBranchSelect={setSelectedBranch}
          onSkillToggle={handleSkillToggle}
        />
      )}
    </main>
  )
}

export default App
