import { Comments } from '../../Types/comments';
import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <h3 className="commentInfo__name">
      {comment.name}
    </h3>
    <h4 className="commentInfo__email">
      {comment.email}
    </h4>
    <p className="commentInfo__text">
      {comment.body}
    </p>
  </div>
);
