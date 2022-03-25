import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
    <a href={`mailto:${comment.email}`}>{comment.email}</a>
  </>
);
