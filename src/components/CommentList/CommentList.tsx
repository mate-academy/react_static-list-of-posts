import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface ReceivedComments {
  comments: Comment[] | null;
}

export const CommentList: React.FC<ReceivedComments> = ({ comments }) => (
  <div className="CommentList">
    {(comments !== null && comments.length !== 0)
      ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b>No comments yet</b>
      )}
  </div>
);
