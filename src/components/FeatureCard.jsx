function FeatureCard({ title, subtitle, icon, modifier }) {
  return (
    <article className={`feature-card ${modifier}`}>
      <div className={`feature-icon feature-icon-${icon}`} />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  )
}

export default FeatureCard
