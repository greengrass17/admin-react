import request from 'superagent';

export const RECEIVE_USER = 'RECEIVE_USER';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

const apiRoot = 'http://localhost:3000/v2';

export const fetchUserFail = err => ({
  type: FETCH_USER_FAIL,
  err
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
})

export const fetchUser = (token, successCb, faillureCb) => dispatch => {
  return request.get(`${apiRoot}/users`)
  .set('auth-token', token)
  .end((err, res) => {
    if (err) {
      faillureCb(err);
      return
    }
    successCb(res.body.data[0]);
  })
}

export const fetchGroups = token => dispatch => {
  return request.get(`${apiRoot}/dashboard/get_groups`)
  .set('auth-token', token)
  .end((err, res) => {
    dispatch(receiveGroups(res.body.data));
  })
}
