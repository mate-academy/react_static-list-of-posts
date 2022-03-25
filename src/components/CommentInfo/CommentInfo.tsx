import { FC } from 'react';
import { Comment } from '../../types/Comment';
import './commentInfo.scss';

interface Props {
  comment: Comment
}

export const CommentInfo:FC<Props> = ({ comment }) => (
  <>
    <p className="comment-email">
      {`Email: ${comment.email}`}
    </p>
    <strong>
      {comment.name}
    </strong>
    <p className="comment-body">
      {comment.body}
    </p>
  </>
);
