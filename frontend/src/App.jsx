import React, { Suspense, lazy } from 'react';
import './styles/app.css';

const UsersPage = lazy(() => import('./pages/UsersPage.jsx'));

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>MERN User Manager</h1>
        <p>Manage users through the production-ready MERN stack API.</p>
      </header>
      <main className="app__content">
        <Suspense fallback={<div className="loading">Loading users...</div>}>
          <UsersPage />
        </Suspense>
      </main>
      <footer className="app__footer">
        <small>Deployment &amp; DevOps Essentials · Week 7</small>
      </footer>
    </div>
  );
}

export default App;

