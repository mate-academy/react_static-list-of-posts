import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/comment';
import './CommentList.scss';

type CommentType = {
  comments: Comment[];
};

export const CommentList = ({ comments }: CommentType) => {
  return (
    <div className="CommentList">
      {comments.map(comment => {
        return (<CommentInfo key={comment.id} comment={comment} />);
      })}
    </div>
  );
};
