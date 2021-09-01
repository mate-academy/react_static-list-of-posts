import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="comments">
      <h3>
        Comments:
      </h3>
      {comments.map(comment => (
        <li className="comments__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
