import * as React from 'react'

export default function CreateUserForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          Name: <input type="text" name="name" value={props.user.name} onChange={props.handleChange} />
        </label>
        <div>
        </div>
        <label>
          Date of birth: <input type="text" name="date" value={props.user.date} onChange={props.handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email: <input type="text" name="email" value={props.user.email} onChange={props.handleChange} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>

        {props.editMode &&
          <button onClick={props.onCancel}>Cancel</button>
        }
      </div>
    </form>
  )
}