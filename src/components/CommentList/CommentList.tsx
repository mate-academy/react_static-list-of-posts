import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/CommentI';

type Props = {
  comments: Comment[];
};

const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comment-list" data-cy="comments-list">
    {comments.map(comment => (
      <CommentInfo
        name={comment.name}
        email={comment.email}
        body={comment.body}
        key={comment.id}
      />
    ))}
  </div>
);

export default CommentList;
