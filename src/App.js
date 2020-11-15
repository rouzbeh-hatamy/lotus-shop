import './App.css';
import LotusProvider from './components/provider/LotusProvider'
import { lazy, Suspense } from 'react';
import Loading from './components/atoms/loading/Loading';
import { Route, BrowserRouter as Router } from 'react-router-dom';
const Index = lazy(() => import('./components/pages/Index/Index'));

function App() {
  return (
    <LotusProvider>
      <Suspense fallback={<div className="fallback"><Loading /></div>}>
        <Router>
          <Route exact path="/">
            <Index />
          </Route>
        </Router>
      </Suspense>
    </LotusProvider>
  );
}

export default App;
