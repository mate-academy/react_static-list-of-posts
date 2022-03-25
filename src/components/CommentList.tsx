import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h2>Comments: </h2>
    <div className="comments">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  </>
);
