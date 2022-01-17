import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommetInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="ui comments">
    <h3 className="ui dividing header">Comments</h3>
    <ul className="comment-list">
      {comments && (
        comments.map(comment => (
          <li key={comment.id} className="comment-list__item">
            <CommentInfo comment={comment} />
          </li>
        )))}
    </ul>
  </div>
);
