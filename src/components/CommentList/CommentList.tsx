import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/ComentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment__list">
    {
      comments.map(comment => (
        <li className="comment__list__item" key={comment.id}>
          <CommentInfo {...comment} />
        </li>
      ))
    }
  </ul>
);
