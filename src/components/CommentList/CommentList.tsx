import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = props => (
  <>
    {props.comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>
);
