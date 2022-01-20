import React from 'react';
import { useParams, Link } from 'react-router-dom';
import markdown from 'snarkdown';
import { getFromNowTime } from '../../utils';
import ThreadStats from '../thread-stats';

const ThreadDetail = (props) => {
  let params = useParams();
  const [thread, updateThread] = React.useState({});

  React.useEffect(() => {
    if (!props.data) return;
    const findThread = props.data.find((item) => item.id === params.threadId);
    updateThread(findThread);
  }, []);
  console.log("=media",thread.media_content);
  return (
    <>
      <Link to="/" className='back-link'>&lt; Back</Link>
      <div className="thread-parent-container detail-page">
        <div className="thread-stats">
          <ThreadStats id={thread.id} score={thread.score} updateVoteCount={props.updateVoteCount} data={props.data} />
        </div>
        <div className="thread-wrapper">
          <div>
            <Link to="/">{thread.subreddit_name_prefixed}</Link> Posted by{' '}
            <span>u/{thread.author}</span>{' '}
            <span>{getFromNowTime(thread.timestamp)}</span>
          </div>
          <h2>{thread.title}</h2>
          {thread.self_text !== '' ? <p
            dangerouslySetInnerHTML={{ __html: markdown(thread.self_text || '') }}
          /> : 
          thread.media_content !== null ? <div className="video-container"><video preload="auto" autoPlay="autoplay" className="thread-video" controls>
            <source src={thread.media_content.scrubber_media_url} type="video/mp4" />  
          </video></div> : <a href={thread.url}>{thread.url}</a>}
        </div>
      </div>
    </>
  );
};

export default ThreadDetail;
