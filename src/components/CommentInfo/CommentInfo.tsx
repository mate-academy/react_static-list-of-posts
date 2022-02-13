import { Comment } from '../../types/comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <p className="commentInfo__body">{comment.body}</p>
    <div className="commentInfo__author">
      <span className="commentInfo__author--name">{comment.name}</span>
      <span className="commentInfo__author--email">{comment.email}</span>
    </div>
  </div>
);
