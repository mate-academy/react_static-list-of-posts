import { CommentType } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: CommentType[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
