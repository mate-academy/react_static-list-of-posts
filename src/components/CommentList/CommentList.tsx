import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (!comments.length) {
    return null;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
