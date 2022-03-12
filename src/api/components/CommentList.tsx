import { Comment } from './Interfaces';

type Props = {
  comment: Comment | null;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div>
    {comment?.id}
  </div>
);
