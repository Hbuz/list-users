import * as React from 'react'
import { Link } from 'react-router-dom'


export default function UserList(props) {

  return (
    <div>
      <h1>List of users</h1>
      <ul>

        {props.users && props.users.map(user =>
          <li key={user.id}>
            <Link to={`/users/${user.id}`}> {user.name} </Link>
          </li>
        )}
      </ul>
    </div>
  )
}