import * as React from 'react'
import { loadUsers } from '../actions/users'
import { connect } from 'react-redux'
import UserList from './UserList'
import CreateUserFormContainer from './CreateUserFormContainer'


class UserListContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {

    if (!this.props.users) return "...Loading users"

    return (
      <div>
        <UserList users={this.props.users} />
        <CreateUserFormContainer />
      </div>
    )
  }
}


const mapStateToProps = state => (
  {
    users: state.users
  })


export default connect(mapStateToProps, { loadUsers })(UserListContainer)