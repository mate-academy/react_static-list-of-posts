import { FC } from 'react';
import { Comment } from '../types/comment';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: FC<Props> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment_title">
        <p className="comment_name">
          {comment.name}
        </p>
        <a href={`mailto:${comment.email}`} className="comment_mail">{comment.email}</a>
      </div>
      <p className="comment_body">
        {comment.body}
      </p>
    </div>
  );
};
