import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  ((comments && comments.length > 0) ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ))
);
