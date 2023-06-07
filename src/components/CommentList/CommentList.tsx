import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const isHaveComments = comments.length > 0;
  const commentsAmmount = comments.length;

  return (isHaveComments
    ? (
      <div className="CommentList">
        <b className="is-size-5">{`${commentsAmmount} Comments :`}</b>
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )
  );
};
