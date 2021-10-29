import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="Comments">
    <h4>Comments:</h4>
    <ul className="CommentsList">
      {
        comments.map(comment => (
          <li key={comment.id} className="CommentsList_Item">
            <CommentInfo comment={comment} />
          </li>
        ))
      }
    </ul>
  </div>
);
