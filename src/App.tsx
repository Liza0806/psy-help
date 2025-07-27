import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import BuggyComponent from './components/BuggyComponent';
import ErrorBoundaryPage from './pages/ErrorBoundaryPage';
import GlobalErrorCatcher from './hooks/GlobalErrorCatcher';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const HowWeWillWork = lazy(() => import('./pages/HowWeWillWork'));
const Options = lazy(() => import('./pages/Options'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
       <GlobalErrorCatcher /> 
      <Routes>
        <Route path="/" element={<Layout />} > 
   {/*      //errorElement={<ErrorBoundaryPage />} */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="howWeWillWork" element={<HowWeWillWork />} />
          <Route path="options" element={<Options />} />
          <Route path="error" element={<ErrorBoundaryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
