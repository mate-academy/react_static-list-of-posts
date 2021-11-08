import { Comment } from '../../types/typesdef';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li className="CommentList__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
