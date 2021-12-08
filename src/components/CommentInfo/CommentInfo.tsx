import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[],
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments && comments.map(comment => (
      <li key={comment.id}>
        <p>
          {comment.name}
        </p>

        <p>
          {comment.email}
        </p>

        <p>
          {comment.body}
        </p>
      </li>
    ))}
  </ul>
);
