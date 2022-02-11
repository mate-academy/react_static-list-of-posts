import { Comment } from '../../types/Comment';
import CommentInfo from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h3>Comments:</h3>
    <ul className="comments-list">
      {comments.map(comment => (
        <li className="comments-list__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);

export default CommentList;
