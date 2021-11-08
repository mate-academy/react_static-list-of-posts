import { Comment } from '../types';
import { CommentInfo } from './CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h4 className="title-comments">Comments</h4>
    <ul className="comments">
      {comments.map(comment => (
        <li className="comments__item">
          <CommentInfo
            key={comment.id}
            comment={comment}
          />
        </li>
      ))}
    </ul>
  </>
);
