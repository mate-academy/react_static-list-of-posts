import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentArr {
  comments: Comment[];
}

export const CommentList = ({ comments }: CommentArr) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
