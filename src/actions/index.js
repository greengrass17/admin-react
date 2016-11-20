import request from 'superagent';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const receiveUser = res => ({
  type: RECEIVE_USER,
  user: res.body.data[0]
})

export const receiveGroups = res => ({
  type: RECEIVE_GROUPS,
  groups: res.body.data,
})

export const fetchUser = token => dispatch => {
  return request.get('http://localhost:3000/v2/users')
  .set('auth-token', token)
  .end((err, res) => {
    dispatch(receiveUser(res));
  })
}
