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
  const handleSort = (event) => {
    const type = event.currentTarget.getAttribute('data-type');
    Promise.resolve(fetchData(type)).then((data) => {
      props.fetchData(data);
    });
  };
  return (
    <div className="app-container">
      <h1>Reddit application using React</h1>
      <div ref={buttonContainerRef} className="button-container">
        <ul className="sort-container">
          <li className="sort-item">
            <button className="" data-type="hot" onClick={handleSort}>
              {' '}
              Hot{' '}
            </button>
          </li>
          <li className="sort-item">
            <button className="" data-type="new" onClick={handleSort}>
              {' '}
              New{' '}
            </button>
          </li>
          <li className="sort-item">
            <button className="" data-type="top" onClick={handleSort}>
              {' '}
              Top{' '}
            </button>
          </li>
        </ul>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/threads/:threadId" element={<ThreadDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
