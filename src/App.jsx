import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{`My API is available at ${process.env.API_URL}!!`}</p>
    </div>
  );
}

export default App;
