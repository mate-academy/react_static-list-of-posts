import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments:Comment[],
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__comment">
        <CommentInfo
          name={comment.name}
          text={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);
