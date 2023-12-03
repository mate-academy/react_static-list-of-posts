import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
