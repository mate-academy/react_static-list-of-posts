import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span>{comment.name}</span>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);
