import { Comments } from '../../typedefs';
import { CommentInfo } from '../CommentsInfo/CommentInfo';

interface Props {
  comments: Comments[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="posts__comments">
    {comments.map(comment => (
      <li key={comment.id} className="posts__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
