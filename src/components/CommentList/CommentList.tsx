import { IComment } from '../../types/Types';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: IComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments">
      <strong>Comments:</strong>
      <ul className="comments__list">
        {comments.map(comment => (
          <li
            key={comment.id}
            className="comments__item"
          >
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
