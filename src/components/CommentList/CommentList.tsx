import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: PostComment[];
};

export const CommmentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    <h2 className="subtitle card-footer">Comments:</h2>
    {comments.map(comment => (
      <li className="comments__item box" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
