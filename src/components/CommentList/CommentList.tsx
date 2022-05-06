import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/CommentI';

type Props = {
  comment: Comment[];
};

const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="comment-list" data-cy="comments-list">
    {comment.map(com => (
      <CommentInfo
        name={com.name}
        email={com.email}
        body={com.body}
      />
    ))}
  </div>
);

export default CommentList;
