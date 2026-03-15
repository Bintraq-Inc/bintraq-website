import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-8xl font-black text-primary mb-4 font-display">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 h-14 px-8 rounded-2xl bg-slate-900 dark:bg-primary text-white font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <span className="material-symbols-outlined">home</span>
          Back to Home
        </Link>
      </div>
    </section>
  )
}
