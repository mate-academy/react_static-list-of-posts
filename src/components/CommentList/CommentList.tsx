import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

export const CommentList = (commentsArray: Comment[]) => (
  commentsArray.map(comment => (CommentInfo(comment))).length > 0
    ? (
      <div className="CommentList">
        {commentsArray.map(comment => (CommentInfo(comment)))}
      </div>
    )
    : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )
);
