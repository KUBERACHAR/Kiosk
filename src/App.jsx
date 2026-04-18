import { useEffect, useState } from 'react'
import PageShell from './components/PageShell.jsx'
import LandingPage from './pages/LandingPage.jsx'
import StudentInfoPage from './pages/StudentInfoPage.jsx'
import './styles/app-shell.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [currentPage, setCurrentPage] = useState('landing')
  const [profile, setProfile] = useState({
    fullName: '',
    selectedYear: '',
    selectedBranch: '',
    selectedSkills: [],
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleSkillToggle = (label) => {
    setProfile((current) => ({
      ...current,
      selectedSkills: current.selectedSkills.includes(label)
        ? current.selectedSkills.filter((item) => item !== label)
        : [...current.selectedSkills, label],
    }))
  }

  return (
    <PageShell
      isStudentMode={currentPage === 'student'}
      isDark={theme === 'dark'}
      onThemeToggle={() =>
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
      }
    >
      {currentPage === 'landing' ? (
        <LandingPage onBegin={() => setCurrentPage('student')} />
      ) : (
        <StudentInfoPage
          profile={profile}
          onBack={() => setCurrentPage('landing')}
          onNameChange={(fullName) =>
            setProfile((current) => ({
              ...current,
              fullName,
            }))
          }
          onYearSelect={(selectedYear) =>
            setProfile((current) => ({
              ...current,
              selectedYear,
            }))
          }
          onBranchSelect={(selectedBranch) =>
            setProfile((current) => ({
              ...current,
              selectedBranch,
            }))
          }
          onSkillToggle={handleSkillToggle}
        />
      )}
    </PageShell>
  )
}

export default App
