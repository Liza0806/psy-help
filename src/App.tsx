import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const HowWeWillWork = lazy(() => import('./pages/HowWeWillWork'));
const Options = lazy(() => import('./pages/Options'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="howWeWillWork" element={<HowWeWillWork />} />
          <Route path="options" element={<Options />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
