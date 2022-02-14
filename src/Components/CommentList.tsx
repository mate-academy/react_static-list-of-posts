import { Comment } from '../Types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments comments-list list">
    {
      comments.map(comment => (
        <li className="comment comments-list__item item" key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))
    }
  </ul>
);
