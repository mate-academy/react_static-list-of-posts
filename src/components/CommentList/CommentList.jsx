import React from 'react';
import propTypes from 'prop-types';

import Comment from '../Comment/Comment';

export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => 
        <li>
        <Comment {...comment} key={comment.id}/>
        </li>
      )}
    </ul>
  )
}
