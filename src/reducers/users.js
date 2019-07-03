import { userS_FETCHED, CREATE_user, DELETE_user } from '../actions/users'

const initialState = null

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case userS_FETCHED:
      return action.payload
    case CREATE_user:
      return [...state, { ...action.payload }]
    case DELETE_user:
      return state && state.filter(user => user.id !== action.payload)
    default:
      return state
  }
}