import React from 'react';
import { Link } from "react-router-dom";
import ThreadStats from '../thread-stats';
import { getFromNowTime } from '../../utils';

export default function ListPage (props) {
   return (
      <div className="thread-parent-container">
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
                    style={{ display: "block", margin: "0px 0px 0.2rem" }}
                    to={`/threads/${val.id}`}
                    key={val.id}
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
    );
};
