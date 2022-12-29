import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments
      .map(comment => <CommentInfo comment={comment} key={comment.id} />)}
  </>
);
