import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    {comment.name}
  </>
);
