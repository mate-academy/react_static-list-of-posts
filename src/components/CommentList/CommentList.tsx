import React from 'react';
import { Comment } from '../../interface/Comment';

import './CommentList.scss';

type Props = {
  comment: Comment;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <>
    <span className="comment-title">{`${comment.name}`}</span>
    <br />
    <span className="comment-body">{`Comment: ${comment.body}`}</span>
    <br />
    <br />
    <span className="comment-email">{`commentator's e-mail: ${comment.email}`}</span>
  </>
);
