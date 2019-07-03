import React from 'react'

function User(props) {
  return (
    <div className='article-author'>author: {props.user.name} email: {props.user.email} from:{props.user.address.city}</div>
    )
}

export default User