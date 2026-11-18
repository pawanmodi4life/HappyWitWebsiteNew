import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import {initContactTracking} from './contactTracking';
import './index.css';

const stopContactTracking = initContactTracking();
import.meta.hot?.dispose(stopContactTracking);

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build includes the same page markup generated at build time.
// Development still starts with an empty root.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
