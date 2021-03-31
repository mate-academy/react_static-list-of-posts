import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss'

export const Comment = ( { name, email, body} ) => (
  <div className='comment'>
    <div className='comment__heading'>
      <h3 className='comment__user'>
        <strong>User: </strong>
        {name[0].toUpperCase() + name.slice(1)}
      </h3>
      <h3 className ='comment__email'>
        <strong>Email: </strong>
        {email}
      </h3>
    </div>
    <div className='comment__body'>
      {body[0].toUpperCase() + body.slice(1)}
      </div>
  </div>
)

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
