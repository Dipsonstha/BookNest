import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-primary">
        Hello, Tailwind CSS with Custom Colors!
      </h1>
      <button className="mt-4 px-4 py-2 bg-secondary text-cyan-500 rounded">
        Click Me
      </button>
      <p className="mt-2 text-accent">
        This is an accent text.
      </p>
    </div>
  );
}

export default App;
