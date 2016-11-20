import { connect } from 'react-redux';
import { receiveUser } from '../actions';
import Routes from '../components/Routes';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (res) => {
      dispatch(receiveUser(res))
    }
  }
}

const UserRoutes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)

export default UserRoutes;
