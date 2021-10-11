import { Comment } from '../../types';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__autor-info">
      <p className="CommentInfo__name">
        {comment.name}
      </p>
      <p className="CommentInfo__email">
        {comment.email}
      </p>
    </div>
    <p className="CommentInfo__body">
      {comment.body}
    </p>
  </div>
);
