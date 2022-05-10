import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../interfaces/commentInterface';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <>
    <b>
      <i>
        {'Comments: '}
      </i>
    </b>
    <ul className="comment_list">
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </li>
      ))}
    </ul>
  </>
);
