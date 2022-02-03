import * as React from 'react';
import { Comment } from '../../types';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div className="comments">
        <h3 className="comments__title">
          {comment.name}
        </h3>
        <p className="comments__email">
          {`To ${comment.email}`}
        </p>
        <p className="comments__text">
          {`${comment.body}.`}
        </p>
      </div>
    ))}
  </>
);
