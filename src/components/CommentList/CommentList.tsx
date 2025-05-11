import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
