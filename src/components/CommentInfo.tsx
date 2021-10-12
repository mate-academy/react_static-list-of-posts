import React from 'react';

import './CommentInfo.scss';

import Comment from '../types/Comment';

type Props = {
  comment: Comment,
};

const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="post__comment">
    <div className="post__comment-title">
      <i>
        {comment.name}
      </i>
    </div>
    <div className="post__comment-body">
      {comment.body}
    </div>
    <div className="post__comment-email">
      {comment.email}
    </div>
  </div>
);

export default CommentInfo;
