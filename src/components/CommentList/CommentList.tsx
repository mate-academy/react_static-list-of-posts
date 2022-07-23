import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.length === 0
      ? <b>No comments yet</b>
      : comments.map(comment => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
  </ul>
);
