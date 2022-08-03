import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentInfo">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
