import React from 'react';
import { createRoot } from 'react-dom/client';
import { TrafficLightContainer } from './components/TrafficLightContainer';

export function App() {
  return (
    <>
        <TrafficLightContainer />
    </>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
