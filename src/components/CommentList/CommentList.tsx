import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  const hasComments = comments.length > 0;
  const commentsAmmount = comments.length;

  return (hasComments
    ? (
      <div className="CommentList">
        <hr />
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
