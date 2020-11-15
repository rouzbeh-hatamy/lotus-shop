import './App.scss';
import LotusProvider from './components/provider/LotusProvider'
import React, { lazy, Suspense } from 'react';
import Loading from './components/atoms/loading/Loading';
import { Route, BrowserRouter as Router, } from 'react-router-dom';
import CostumNavbar from './components/atoms/nav/CostumNavbar';
const Index = lazy(() => import('./components/pages/Index/Index'));

function App() {
  return (
    <LotusProvider>
      <Suspense fallback={<div className="fallback"><Loading /></div>}>
        <Router>
          <div className="App">
            <CostumNavbar />
            <Route exact path="/">
              <Index />
            </Route>
          </div>
        </Router>
      </Suspense>
    </LotusProvider>
  );
}

export default App;
