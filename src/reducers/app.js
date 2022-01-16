export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'UPDATE_VOTE_COUNT':
      return updateThreadVote(state, action);

    default:
      return state;
  }
};

function updateThreadVote (state, action) {
  const {thread, buttonState} = action.payload;
  const newData = state.data;
  const objIndex = state.data.findIndex((obj => obj.id == thread.id));
  if(buttonState === 'add')
    newData[objIndex].score = thread.score + 1;
  else if(buttonState === 'remove')
    newData[objIndex].score = thread.score - 1;
  return {
    ...state,
    data: [...newData] 
  }
}