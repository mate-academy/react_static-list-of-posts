import { FC } from 'react';
import { Comment } from '../../types';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__comment">
        {comment.body}
      </p>

      <h3 className="CommentInfo__title">
        {comment.name}
      </h3>

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>
  );
};
