import { Comment } from '../../types/Types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment">
    {comments.map(comment => (
      <li key={comment.id} className="comment__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
