import { Component, ErrorInfo, ReactNode } from "react";
import Somthing from "../somthingpop"

interface Prop {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Prop, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    console.log("Uncaught Error", Error);
    console.log("occure Error", Error);

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
        return <Somthing />
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
