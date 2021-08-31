import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  reviews: Comment[]
};

export const CommentList: React.FC<Props> = ({ reviews }) => (
  <>
    {reviews.map(comment => (
      <h5 className="bg-info">
        <CommentInfo comment={comment} />
        {' '}
      </h5>
    ))}
  </>
);
