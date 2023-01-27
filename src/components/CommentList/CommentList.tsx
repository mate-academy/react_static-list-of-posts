import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentArr {
  commentsFromServer: Comment[];
}

export const CommentList = ({ commentsFromServer }: CommentArr) => (
  <div className="CommentList">
    {commentsFromServer.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
