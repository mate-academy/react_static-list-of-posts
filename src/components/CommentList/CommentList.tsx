import React from 'react';
import { Comment } from '../../types/interfaces';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <ul
        className="comment-list"
        key={comment.id}
        data-cy="comments-list"
      >
        <CommentInfo comment={comment} />
      </ul>
    ))}
  </>
);
