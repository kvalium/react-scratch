import React from 'react';
import { TopBar, ErrorBoundary } from './components/Struct';
import Router from './Router';

/**
 * * CONCEPTS
 * * --------
 * * JSX Fragment
 * * Components folding
 *
 */
function App() {
  return (
    <>
      <TopBar />
      <section className="section main-container">
        <div className="container">
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}

export default App;
