import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <App
    posts={{
    userId: 0,
    id: 0,
    title: '',
    body: ''
    }}
  />,
);
