import * as React from 'react'
import UserDetail from './UserDetail'
import { connect } from 'react-redux'
import { loadUser, loadUsers, deleteUser, updateUser } from '../actions/users'

class UserDetailContainer extends React.PureComponent {

  state = {
    editMode: false
  }

  componentDidMount() {
    this.props.loadUser(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteUser(this.props.user.id)
    this.props.history.push('/')
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.user.name,
        date: this.props.user.date,
        email: this.props.user.email
      }
    })
  }

  onChange = user => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [user.target.name]: user.target.value
      }
    })
  }

  onSubmit = user => {
    user.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateUser(this.props.user.id, this.state.formValues)
  }

  onBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <UserDetail user={this.props.user} onDelete={this.onDelete} onEdit={this.onEdit}
        onChange={this.onChange} onSubmit={this.onSubmit} formValues={this.state.formValues} 
        editMode={this.state.editMode} onBack={this.onBack}/>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user
})


export default connect(mapStateToProps, { loadUser, loadUsers, deleteUser, updateUser })(UserDetailContainer)