import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ul className="comment-list" data-cy="comments-list">
    <h3 className="comments-title">Comments:</h3>
    {comments.map(comment => (
      <CommentInfo key={comment.id} {...comment} />
    ))}
  </ul>
);
