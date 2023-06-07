import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentListProps {
  commentList: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ commentList }) => {
  const isHaveComments = commentList.length > 0;

  return (isHaveComments
    ? (
      <div className="CommentList">
        {commentList.map(comment => (
          <CommentInfo postComment={comment} key={comment.id} />
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
