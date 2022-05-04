import { Comment } from '../../types';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="ui list">
    {comments.map(comment => (
      <li key={comment.id}>
        <span>{comment.body}</span>
      </li>
    ))}
  </ul>
);
