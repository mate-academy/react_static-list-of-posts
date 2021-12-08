import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <ul className="comments">
      {comments.map(comment => (
        <li key={comment.id} className="commentsItem">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
