import React from 'react';
import './CommentList.scss';

import { Comment } from '../Comment/Comment';
import { commentListPropTypes } from '../TypesOfProp';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    <h3 className="comments__title">Comments List</h3>
    <li className="comments__item">
      {comments.map(comment => <Comment comment={comment} />)}
    </li>
  </ul>
);

CommentList.propTypes = commentListPropTypes;
