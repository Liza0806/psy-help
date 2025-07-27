import { Component, ReactNode } from "react";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Global ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />;
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
