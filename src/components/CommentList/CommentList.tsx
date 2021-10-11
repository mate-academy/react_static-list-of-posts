import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="comment__list">
    <h2>CommentList:</h2>
    {comment.map(text => (
      <li className="comment__item" key={text.id}>
        <CommentInfo comment={text} />
      </li>
    ))}
  </ul>
);
