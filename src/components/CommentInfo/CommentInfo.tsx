import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
    <h3>{comment.email}</h3>
  </>
);

export default CommentInfo;
