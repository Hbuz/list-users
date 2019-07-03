import * as React from 'react'
import { connect } from 'react-redux'
import CreateUserForm from './CreateUserForm'
import { createUser } from '../actions/users'

class CreateUserFormContainer extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(user) {
    this.setState({ [user.target.name]: user.target.value })
  }

  handleSubmit(user) {
    user.preventDefault()
    //create user
    this.props.createUser(this.state)
    //clear state
    this.setState({
      name: '',
      date: '',
      email: ''
    })
  }

  onCancel = () => {
    this.setState({
      editMode: false
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h3>Add new user</h3>
        <CreateUserForm user={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          onCancel={this.onCancel}/>
      </div>
    )
  }
}

export default connect(null, { createUser })(CreateUserFormContainer)