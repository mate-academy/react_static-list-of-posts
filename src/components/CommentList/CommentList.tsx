import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/types';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments comments-list">
    {comments.map(comment => (
      <li key={comment.postId} className="comments-list__item comment-info">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
