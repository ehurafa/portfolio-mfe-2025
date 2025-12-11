import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  mfeName?: string
}

interface State {
  hasError: boolean
  error: Error | null
}

export class MFEErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { mfeName = 'Unknown MFE' } = this.props
    console.error(`[MFE Error - ${mfeName}]:`, error, errorInfo)

    // You could send this to an error tracking service
    // trackError({ mfe: mfeName, error, errorInfo })
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="mfe-error-fallback">
          <div className="error-content">
            <h2>⚠️ Erro ao carregar microfrontend</h2>
            <p className="error-message">{this.state.error?.message || 'Erro desconhecido'}</p>
            {this.props.mfeName && <p className="mfe-name">MFE: {this.props.mfeName}</p>}
            <button type="button" onClick={this.handleRetry} className="retry-btn">
              Tentar Novamente
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
