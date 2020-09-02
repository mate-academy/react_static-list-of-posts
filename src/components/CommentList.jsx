import React from 'react';

import './CommentList.scss';
import { Comment } from './Comment';
import { CommentsShape } from './Shape';

export const CommentList = ({ comments }) => (
  <div className="Comments">
    <h4 className="Comments__header">Comments:</h4>
    {comments.map(comment => <Comment {...comment} key={comment.id} />)}
  </div>
);

CommentList.propTypes = CommentsShape;
