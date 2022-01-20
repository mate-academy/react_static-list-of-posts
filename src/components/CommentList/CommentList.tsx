import { CommentInfo } from '../CommentInfo';
import './CommentsList.scss';

type Props = {
  comments: PostComment[];
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ul className="comment-list">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
