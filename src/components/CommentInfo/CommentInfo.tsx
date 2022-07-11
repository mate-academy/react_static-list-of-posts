import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>
      {comment.body}
    </p>

    <a className="UserInfo" href={comment.email}>
      {comment.name}
    </a>
  </>
);
