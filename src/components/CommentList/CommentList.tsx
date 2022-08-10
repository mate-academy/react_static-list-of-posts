import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[],
};

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <>
    {comments.length > 0 ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} />
        ))}
      </div>
    ) : (
      <>
        <hr />
        <b>No comments yet</b>
      </>
    )}
  </>
);
