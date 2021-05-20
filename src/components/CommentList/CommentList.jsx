import React from 'react';
import propTypes from 'prop-types';

import Comment from '../Comment/Comment';

export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => 
        <Comment {...comment} key={comment.id}/>
      )}
    </ul>
  )
}

CommentList.propTypes = {
  comments:  propTypes.shape({
    comment: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
}
