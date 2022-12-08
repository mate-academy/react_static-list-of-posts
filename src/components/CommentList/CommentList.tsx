import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[]
};

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <div className="CommentList">
    {
      comments.map((comment) => <CommentInfo key={comment.id} {...comment} />)
    }
  </div>
);
