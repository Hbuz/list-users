import * as React from 'react'
import CreateUserForm from './CreateUserForm'

export default function UserDetail(props) {

  if (!props.user) return `...Loading User Details`

  return (
    <div>
      {props.editMode && <CreateUserForm handleSubmit={props.onSubmit} handleChange={props.onChange}
        user={props.formValues} editMode={props.editMode} />}

      {!props.editMode &&
        <div>
          <h1>Name: {props.user.name}</h1>
          <i>Date of birth: {props.user.date}</i>
          <p>Email: {props.user.email}</p>

          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onEdit}>Edit</button>
          <button onClick={props.onBack}>Go Back</button>
        </div>}
    </div>
  )
}