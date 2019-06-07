import React from 'react';
import { TopBar, Footer, ErrorBoundary } from './components';
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
      <Footer />
    </>
  );
}

export default App;
