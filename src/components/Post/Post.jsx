import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User'
import { CommentsList } from '../CommentsList'

export const Post = ({
  title,
  body,
  user,
  comments,
}) =>{
  return(
  <div className='post'>
    <div className='post__heading'>
      <User user={user} />
    </div>
    <div className='post__body'>
    <h2 className='postTitle'>
      Title:  {title[0].toUpperCase() + title.slice(1)}
      </h2>
      <p className='postText'>
        {body[0].toUpperCase() + body.slice(1)}
      </p>
    </div>
    <CommentsList comments={comments} />
  </div>
)
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
}
