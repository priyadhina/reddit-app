import { connect } from 'react-redux';
import ThreadDetail from '../components/thread-detail';
import { updateVoteCount } from '../actions/app';
const mapStateToProps = (state) => {
  return {
    data: state.app.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateVoteCount: (data) => {
      dispatch(updateVoteCount(data));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetail);
