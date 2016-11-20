import { connect } from 'react-redux';
import { receiveUser, fetchUser } from '../actions';
import Routes from '../components/Routes';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch(receiveUser(user))
    },
    fetchUser: (token, successCb, faillureCb) => {
      dispatch(fetchUser(token, successCb, faillureCb))
    }
  }
}

const UserRoutes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)

export default UserRoutes;
