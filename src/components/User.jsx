import React from 'react'

function User({user}) {
  return (
    <div className='article__author'>
      author: {user.name} 
      email: {user.email} 
      from:{user.address.city}
    </div>
    )
}

export default User