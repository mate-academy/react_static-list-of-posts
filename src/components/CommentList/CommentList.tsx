import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length
      ? (
        comments.map(comment => (
          <CommentInfo
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <b>No comments yet</b>
      )}
  </div>
);
