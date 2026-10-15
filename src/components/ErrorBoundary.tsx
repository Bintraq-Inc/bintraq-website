import { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen flex items-center justify-center py-24 bg-background-light">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">error</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-lg text-primary mb-10">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-3 h-14 px-8 rounded-none bg-secondary text-primary font-bold transition-all shadow-card"
              >
                <span className="material-symbols-outlined">refresh</span>
                Refresh Page
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="inline-flex items-center gap-3 h-14 px-8 rounded-none border-2 border-primary text-primary font-semibold transition-all"
              >
                <span className="material-symbols-outlined">home</span>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
