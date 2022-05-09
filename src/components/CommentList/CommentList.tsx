import React from 'react';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../types';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <section className="post-comments" data-cy="comments-list">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </section>
);
