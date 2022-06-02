import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment;
};
export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="commentName" data-cy="comment-name">
      {`Name: ${comment.name}`}
    </h3>
    <a href="#H1" className="commentEmail" data-cy="comment-email">
      {`Email: ${comment.email}`}
    </a>
    <div className="commentBody" data-cy="comment-body">
      {comment.body}
    </div>
  </>

);
