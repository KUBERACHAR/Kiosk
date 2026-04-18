import SkillChip from '../components/SkillChip.jsx'
import {
  academicYears,
  branches,
  skillOptions,
} from '../data/studentProfileData.js'
import '../styles/student-info-page.css'

function StudentInfoPage({
  profile,
  onBack,
  onNameChange,
  onYearSelect,
  onBranchSelect,
  onSkillToggle,
}) {
  const isReady =
    profile.fullName.trim() &&
    profile.selectedYear &&
    profile.selectedBranch &&
    profile.selectedSkills.length > 0

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
      </header>

      <div className="profile-grid">
        <section className="profile-card">
          <p className="field-label">FULL NAME</p>
          <input
            className="profile-input"
            type="text"
            placeholder="e.g. Name Surname"
            value={profile.fullName}
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
                className={`year-pill ${profile.selectedYear === year ? 'is-selected' : ''}`}
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
              value={profile.selectedBranch}
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
          <span className="selection-pill">
            {profile.selectedSkills.length} Selected
          </span>
        </div>

        <div className="skills-grid">
          {skillOptions.map((skill) => (
            <SkillChip
              key={skill.label}
              {...skill}
              active={profile.selectedSkills.includes(skill.label)}
              onToggle={onSkillToggle}
            />
          ))}
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

export default StudentInfoPage
