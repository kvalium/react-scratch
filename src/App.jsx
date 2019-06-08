import React from 'react';
import { TopBar, Footer, ErrorBoundary } from './components/Struct';
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
    <ErrorBoundary>
      <TopBar />
      <section className="section main-container">
        <div className="container">
          <Router />
        </div>
      </section>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
