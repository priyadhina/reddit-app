import React from 'react';

export default function ThreadStats (props) {
    const updateCount= (event) => {
        const value = event.currentTarget.getAttribute('data-type');
        const buttonState = value.split('-');
        const findThread = props.data.find((item) => item.id === buttonState[0]);
        props.updateVoteCount({ thread: findThread, buttonState: buttonState[1] });
      };
   return (
    <>
        <button className="vote-button up-vote" data-type={`${props.id}-add`} onClick={updateCount}>
           <span>
               <i className="bi-caret-up"></i>
           </span>
       </button>
       <div className="vote-count">{props.score}</div>
       <button className="vote-button down-vote" data-type={`${props.id}-remove`} onClick={updateCount}>
            <span>
                <i className="bi-caret-down"></i>
            </span>
        </button>
    </>
    );
};
