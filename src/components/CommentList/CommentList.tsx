import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <div key={comment.id} className="CommentInfo">
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
