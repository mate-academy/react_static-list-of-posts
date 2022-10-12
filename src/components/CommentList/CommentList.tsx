import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList has-background-link-light p-5 box is-shadowless">
    {comments.map(comment => (
      <li className="block" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
