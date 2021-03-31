import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { Comment } from '../Comment'

export const Post = ({
  title,
  body,
  userName,
  email,
  address,
  comments
}) =>{
  return(
  <div className='post'>
    <div className='post__heading'>
      <h2 className='postTitle'>
        {title[0].toUpperCase() + title.slice(1)}
      </h2>
      <h3 className='postAutor'>
        <strong>User: </strong>
        {userName}
      </h3>
      <h3 className='postEmail'>
        <strong>Email: </strong>
        {email}
      </h3>
      <h3 className='postAddress'>
        <strong>Adress: </strong>
        {
        `${address.street},
          ${address.suite},
          ${address.city},
          ${address.zipcode}`
        }
      </h3>
    </div>
    <div className='post__body'>
      <p className='postText'>
        {body[0].toUpperCase() + body.slice(1)}
      </p>
    </div>
    <div className='post__comments'>
      <h3>Comments:</h3>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  </div>
)
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
}
