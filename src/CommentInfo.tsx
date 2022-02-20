import { Comment } from './Type';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);
