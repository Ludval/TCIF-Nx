import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Stocks = React.lazy(() => import('stocks/Module'));

const Calendar = React.lazy(() => import('calendar/Module'));

const MeteoWidget = React.lazy(() => import('meteo-widget/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stocks">Stocks</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/meteo-widget">MeteoWidget</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="personal-dashboard" />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/meteo-widget" element={<MeteoWidget />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
