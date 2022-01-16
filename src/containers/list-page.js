import { connect } from 'react-redux';
import ListPage from '../components/list-page';
import { updateVoteCount, fetchData } from '../actions/app';

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
    fetchData: (data) => {
      dispatch(fetchData(data));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
