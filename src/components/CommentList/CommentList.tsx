import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (!comments) {
    return null;
  }

  return (
    <>
      <p>
        <strong>{'Comments: '}</strong>
      </p>

      <ul className="comments">
        {comments.map(comment => (
          <li
            key={comment.id}
            className="comment"
          >
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
};
