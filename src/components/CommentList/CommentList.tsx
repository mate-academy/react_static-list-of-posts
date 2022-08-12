import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[]
};
export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <div className="CommentList">
        {comments.map((com) => (
          <CommentInfo key={com.id} comment={com} />
        ))}
      </div>
    );
  }

  return (
    <>
      <hr />
      <b>No comments yet</b>
    </>
  );
};
