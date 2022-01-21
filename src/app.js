import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './app.css';
import { fetchData } from './utils.js';
import ListPage from './containers/list-page.js';
const ThreadDetail = React.lazy(() => import('./containers/thread-detail.js'));
export default function App(props) {
  React.useEffect(() => {
    Promise.resolve(fetchData()).then((data) => {
      props.fetchData(data);
    });
  }, []);
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/threads/:threadId" element={<Suspense fallback={<div />}><ThreadDetail /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}
