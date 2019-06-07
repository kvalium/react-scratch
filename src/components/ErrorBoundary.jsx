import React from 'react';
import PropTypes from 'prop-types';

import logErrorToMyService from '../services/logErrorService';

/**
 * Error Boundary Component handles errors happening in the app, provides a fallback UI
 *
 * * CONCEPTS
 * * --------
 * * Error Boundary
 * * EB lifecycle: getDerivedStateFromError & componentDidCatch
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Error UI fallback switch, accept error as parameter but unused here
   */
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /**
   * Error notifier
   *
   * @param {*} error Triggered technical error
   * @param {*} info human friendly message
   */
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
