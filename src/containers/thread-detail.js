import { connect } from 'react-redux';
import ThreadDetail from '../components/thread-detail';

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
