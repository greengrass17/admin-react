import request from 'superagent';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const requestUser = token => {
  type: REQUEST_USER,
  token
}

export const receiveUser = res => {
  type: RECEIVE_USER,
  user: res.data[0]
}

export const fetchUser = token => dispatch => {
  dispatch(requestUser(token));
  return request.get('http://localhost:3000/v2/users')
  .set('auth-token', token)
  .end((err, res) => {
    dispatch(receiveUser(res));
  })
}
