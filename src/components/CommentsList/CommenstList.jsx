import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment'

export const CommentsList = ({comments}) => (
  <div className='post__comments'>
      <h3>Comments:</h3>
      {comments.map(comment =>(
        <Comment key={comment.id} {...comment} />
      ))
      }
  </div>
)

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }))
}
