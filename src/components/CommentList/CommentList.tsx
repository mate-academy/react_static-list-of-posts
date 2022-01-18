import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Commentary[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="box">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
