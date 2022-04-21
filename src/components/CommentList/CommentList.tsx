import { Comments } from '../../Types/comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC <Props> = ({ comments }) => (
  <ul className="commentList">
    {
      comments.map(comment => (
        <li key={comment.id} className="commentList__item">
          <CommentInfo comment={comment} />
        </li>
      ))
    }
  </ul>
);
