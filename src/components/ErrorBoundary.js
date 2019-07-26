import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error
    });
    // console.log(error);
    // console.log(info);
  }

  render() {
    return this.state.hasError ? (
      <h2> Something went wrong </h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
