import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ email, name, body }) => (
  <>
    <h3 className="comment__name">{name}</h3>
    <p className="comment__email">{email}</p>
    <p className="comment__body">{body}</p>
  </>
);
