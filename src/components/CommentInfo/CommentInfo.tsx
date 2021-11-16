import { Comment } from '../../types/types';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment">
      <p>{comment.name}</p>
      <p>{comment.body}</p>
      <p>
        <a href="..." className="comment__email">{comment.email}</a>
      </p>
    </div>
  </>
);
