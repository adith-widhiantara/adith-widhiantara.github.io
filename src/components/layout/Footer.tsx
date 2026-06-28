import cvData from '@/data/cv-data.json'

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: 'var(--border)' }}>
      <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {cvData.personal.name}
        </p>
        <div className="flex gap-5">
          <a
            href={cvData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity duration-150 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            GitHub
          </a>
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity duration-150 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${cvData.personal.email}`}
            className="text-sm transition-opacity duration-150 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
