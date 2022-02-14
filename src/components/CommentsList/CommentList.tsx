import { Comment } from '../../types/Comment';
import { ComentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comentsList: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comentsList }) => (
  <ul className="comments__list">
    {comentsList.map(comment => (
      <li className="comments__item" key={comment.id}>
        <ComentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
