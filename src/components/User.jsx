import React from 'react'
import PropTypes from 'prop-types'

const User = ({user}) => (
  <div className='article__author'>
    author: {user.name} 
    email: {user.email} 
    from:{user.address.city}
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User