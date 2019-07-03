import request from 'superagent'

export const userS_FETCHED = 'userS_FETCHED'
export const user_FETCHED = 'user_FETCHED'
export const CREATE_user = 'CREATE_user'
export const DELETE_user = 'DELETE_user'
export const UPDATE_user = 'UPDATE_user'

const baseUrl = 'http://localhost:4000'

const usersFetched = users => ({
  type: userS_FETCHED,
  payload: users
})

const userFetched = user => ({
  type: user_FETCHED,
  payload: user
})


const createUserSuccess = user => ({
  type: CREATE_user,
  payload: user
})


const deleteUserSuccess = userId => ({
  type: DELETE_user,
  payload: userId
})

const updateUserSuccess = (userId, user) => ({
  type: UPDATE_user,
  payload: userId
})


//getState is an argument to check if there are already users in the state
export const loadUsers = () => {
  return function (dispatch, getState) {
    if (getState().users) return

    request(`${baseUrl}/users`)
      .then(response => {
        dispatch(usersFetched(response.body))
      })
      .catch(error => console.error(error))   //same as .catch(console.error)?
  }
}


export const loadUser = (id) => {
  return function (dispatch) {
    request(`${baseUrl}/users/${id}`)
      .then(response => {
        dispatch(userFetched(response.body))
      })
      .catch(console.error)
  }
}


export const createUser = (user) => {
  return function (dispatch) {
    request
      .post(`${baseUrl}/users`)
      .send(user)
      .then(response => {
        console.log(`Repsonse from post: ${JSON.stringify(response.body)}`)
        dispatch(createUserSuccess(response.body))
      })
      .catch(console.error)
  }
}


export const deleteUser = id => {
  console.log(id)
  return function (dispatch) {
    request
      .delete(`${baseUrl}/users/${id}`)
      .then(_ => {
        dispatch(deleteUserSuccess(id))
      })
      .catch(console.error)
  }
}


export const updateUser = (id, user) => {
  console.log(id + "  " + user)
  return function (dispatch) {
    request
      .patch(`${baseUrl}/users/${id}`)
      .send(user)
      .then(response => {
        dispatch(updateUserSuccess(response.body))
      })
      .catch(console.error)
  }
}