import { Comment } from '../types/types';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p className="card-text">
      <strong>{comment.name}</strong>
    </p>
    <p className="card-text">{comment.body}</p>
    <p className="blockquote-footer">{comment.email}</p>
  </>
);
