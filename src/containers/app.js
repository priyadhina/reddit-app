import { connect } from 'react-redux';
import AppComponent from '../app';
import { fetchData } from '../actions/app';

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => {
      dispatch(fetchData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
