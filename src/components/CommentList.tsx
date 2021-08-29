import React from 'react';
import { Comment } from '../Types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h5>Comments</h5>
    {comments.map(comment => (
      <div className="card border-light mb-2" key={comment.id}>
        <div className="card-body">
          <div className="card-text">
            <CommentInfo {...comment} />
          </div>
        </div>
      </div>
    ))}
  </>
);
