import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface CommentListProp {
  comments: Comment[]
}

export const CommentList: React.FC<CommentListProp> = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0 ? comments.map(comment => (
      <CommentInfo comment={comment} />
    )) : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
