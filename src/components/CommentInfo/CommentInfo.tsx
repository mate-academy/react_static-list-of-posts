import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <h4>{comment.body}</h4>
    <h3>{comment.email}</h3>
  </>
);

export default CommentInfo;
