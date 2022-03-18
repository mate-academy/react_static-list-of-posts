import { CommentInfo } from './CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
