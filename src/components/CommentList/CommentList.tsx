import { Comment } from '../../types/Comment';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    ))}
  </div>
);
