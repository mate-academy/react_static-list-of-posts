import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment">
    {comments.map(comment => (
      <li className="comment__list" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
