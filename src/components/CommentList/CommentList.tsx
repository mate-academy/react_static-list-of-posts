import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[]
};
export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments.length > 0 ? (
    <div className="CommentList">
      {comments.map((com) => (
        <CommentInfo key={com.id} comment={com} />
      ))}
    </div>
  ) : (
    <>
      <hr />
      <b>No comments yet</b>
    </>
  );
};
