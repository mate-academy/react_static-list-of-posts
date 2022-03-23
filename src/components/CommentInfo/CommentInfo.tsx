import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h1 className="Comment__title">
      {comment.name}
    </h1>

    <span className="Comment__mail">
      {comment.email}
    </span>

    <h3 className="Comment__text">
      {comment.body}
    </h3>
  </>
);
