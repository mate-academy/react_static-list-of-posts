import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../../types/Comments';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
