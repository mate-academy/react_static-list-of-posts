import { CommentInfo } from '../CommentInfo/CommentInfo';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        <CommentInfo comment={comment} key={comment.id} />
      </li>
    ))}
  </ul>
);
