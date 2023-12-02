"use client"

import { Component, ReactNode } from "react"
import { HttpError } from "@/libs/error"

interface Props {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
  error: Error | null;
}

export default class HttpErrorBoundary extends Component<Props, State>  {
  public state: State = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error) {
		return { 
      hasError: true,
      error,
    };
	}

  renderError(status: number) {
    return {
      404: <div>404 에러</div>
    }[status] ?? <div>HTTP 에러</div>
  }

  render() {
    if (this.state.error instanceof HttpError) {
      return this.renderError(this.state.error.status);
    }
    return this.props.children;
  }
}
