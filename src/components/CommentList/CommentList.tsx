import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/index';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      <b>Comments:</b>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo
              name={comment.name}
              body={comment.body}
              email={comment.email}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
