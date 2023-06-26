import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map((comment) => {
      return <CommentInfo key={comment.id} comment={comment} />;
    })}
  </ul>
);
