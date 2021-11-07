import { Comments } from '../types/Post';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(comment => (
      <li key={comment.id} className="post__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
