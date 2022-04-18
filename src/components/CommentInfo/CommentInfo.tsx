import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

const CommentInfo: React.FC<Comment> = ({
  name,
  body,
  email,
}) => (
  <>
    <h3 className="userName" data-cy="comment-name">
      {` ${name}`}
    </h3>
    <p className="commentBody" data-cy="comment-body">
      {body}
    </p>
    <p className="userEmail" data-cy="comment-email">
      {email}
    </p>
  </>
);

export default CommentInfo;
