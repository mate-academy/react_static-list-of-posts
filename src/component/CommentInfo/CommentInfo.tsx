import { Comments } from '../../types/Types';
import './CommentInfo.scss';

type CommentProps = {
  comments: Comments[];
};

export const CommentInfo: React.FC<CommentProps> = ({ comments }) => (
  <>
    <ul className="comment">
      {comments.map(comment => (
        <li key={comment.id} className="comment__item">
          <h3 className="comment__name">{comment.name}</h3>
          <p className="comment__text">{comment.body}</p>
          <div className="comment__email">{comment.email}</div>
        </li>
      ))}
    </ul>
  </>
);
