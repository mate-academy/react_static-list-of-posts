import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment;
};
export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="commentName">
      {`Name: ${comment.name}`}
    </h3>
    <a href="#H1" className="commentEmail">
      {`Email: ${comment.email}`}
    </a>
    <div className="commentBody">
      {comment.body}
    </div>
  </>

);
