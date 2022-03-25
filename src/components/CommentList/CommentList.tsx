import { Comment } from '../../types/PropTypes';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <p>Comments:</p>
    {comments.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
