import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div>
    <CommentInfo
      name={comment.name}
      body={comment.body}
      email={comment.email}
    />
  </div>
);
