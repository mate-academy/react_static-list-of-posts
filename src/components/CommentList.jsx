import React from 'react';
import Comment from './Comment';

import {CommentsShape} from '../types';

const CommentList = ({comments}) => (
  <ul>
    {comments
    ? comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>)
      )
    : null}
  </ul>
)

CommentList.propTypes = {
  commens: CommentsShape,
}

export default CommentList;
