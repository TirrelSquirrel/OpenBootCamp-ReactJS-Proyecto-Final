import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// Importar estilos
import './styles/css/index.scss';
import 'bootstrap';

// TODO: Si trabajamos con redux, crear el store y aplicar middleware en Redux Saga

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
