import { Comment } from '../../types/Comment';
import { CommentCard } from '../CommentCard';

import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentsList" data-cy="comments-list">
      {comments.map(comment => (
        <li className="CommentsList__item" key={comment.id}>
          <CommentCard comment={comment} />
        </li>
      ))}
    </ul>
  );
};
