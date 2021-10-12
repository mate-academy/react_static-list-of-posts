import React from 'react';

import './CommentList.scss';

import Comment from '../types/Comment';

import CommentInfo from './CommentInfo';

type Props = {
  comments: Comment[],
};

const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="post__comments">
    <h2 className="post__comments-title">
      Comments
    </h2>
    {comments.map(currComment => (
      <CommentInfo comment={currComment} />
    ))}
  </div>
);

export default CommentList;
