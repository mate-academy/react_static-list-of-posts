import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[] | [];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <h2 className="Comment">
    Comments:
    <ol className="Comment__list">
      {comments.map(comment => (
        <li className="Comment__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ol>
  </h2>
);
