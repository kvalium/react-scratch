import React from 'react';
import { TopBar, Footer } from './components';
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
          <Router />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
