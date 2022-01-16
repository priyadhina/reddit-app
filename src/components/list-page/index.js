import React from 'react';
import { Link } from "react-router-dom";
import ThreadStats from '../thread-stats';
import { getFromNowTime, fetchData } from '../../utils';
import './list-page.css';

export default function ListPage (props) {
  const [activeButton, setActiveButton] = React.useState('hot');
  const handleSort = (event) => {
    const type = event.currentTarget.getAttribute('data-type');
    Promise.resolve(fetchData(type)).then((data) => {
      props.fetchData(data);
      setActiveButton(type);
    });
  };
   return (
     <>
     <div className='main-bg'></div>
     <div className='main-title'>
      <img className='thread-image' src="https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&amp;s=7cf7106da701c2fe71cf4917f429ccf16d84066a" />
      <h1>Reddit Dota 2</h1></div>
     <div className="thread-parent-container">
        <ul className="sort-container">
          <li className={`${activeButton === 'hot' ? 'hot-active' : ''} sort-item`}>
            <button data-type="hot" onClick={handleSort}>
              Hot
            </button>
          </li>
          <li className={`${activeButton === 'new' ? 'new-active' : ''} sort-item`}>
            <button data-type="new" onClick={handleSort}>
              New
            </button>
          </li>
          <li className={`${activeButton === 'top' ? 'top-active' : ''} sort-item`}>
            <button  data-type="top" onClick={handleSort}>
              Top
            </button>
          </li>
        </ul>
      
        {props.data &&
          props.data.map((val) => {
            return (
              <div className="thread-container" key={val.id}>
                <div className="thread-stats">
                  <ThreadStats id={val.id} score={val.score} updateVoteCount={props.updateVoteCount} data={props.data} />
                </div>
                <div className="thread-wrapper">
                  <div className="thread-details">
                    Posted by u/{val.author} &nbsp;
                    <span>{getFromNowTime(val.timestamp)}</span>
                    </div>
                  <Link
                    to={`/threads/${val.id}`}
                    key={val.id}
                    className='thread-link'
                  >
                    <div className="thread-title">{val.title}</div>
                  </Link>
                  <div className='thread-comments'>
                    <i className="bi-chat"></i>&nbsp;
                    {val.comments} comments
                  </div>
                </div>
              </div>
            );
          })}
      </div>
     </>
    );
};
