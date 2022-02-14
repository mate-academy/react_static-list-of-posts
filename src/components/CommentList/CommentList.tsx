import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list">
    {
      comments.map(comment => (
        <li key={comment.id} className="comment-list__item">
          <CommentInfo {...comment} />
        </li>
      ))
    }
  </ul>
);
