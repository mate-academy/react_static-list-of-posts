import { Comment } from './Type';

export type Props = {
  comments: Comment[]
};

export const CommentInfo: React.FC<Props> = ({ comments = [] }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <p>{comment.name}</p>
        <p>{comment.body}</p>
        <p>{comment.email}</p>
      </li>
    ))}
  </ul>
);
