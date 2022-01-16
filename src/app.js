import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './app.css';
import { fetchData } from './utils.js';
import ListPage from './containers/list-page.js';
import ThreadDetail from './containers/thread-detail.js';
export default function App(props) {
  const buttonContainerRef = React.useRef();
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
          <Route path="/threads/:threadId" element={<ThreadDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
