import { user_FETCHED, UPDATE_user } from '../actions/users'

const initialState = null

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case user_FETCHED:
      return action.payload
    case UPDATE_user:
      return action.payload
    default:
      return state
  }
}