export const fetchData = (data) => {
  return {
    type: 'FETCH_DATA',
    payload: data,
  };
};

export const updateVoteCount = ({ thread, buttonState }) => {
  return {
    type: 'UPDATE_VOTE_COUNT',
    payload: {
      thread, 
      buttonState
    }
  };
}
