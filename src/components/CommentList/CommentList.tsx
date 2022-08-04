import { CommentType } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

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
