import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <div>
      <strong>Comments:</strong>
      <br />
      <br />
      {comments.map(oneComment => (
        <div key={oneComment.id}>
          <CommentInfo comment={oneComment} />
        </div>
      ))}
    </div>
  </>
);
