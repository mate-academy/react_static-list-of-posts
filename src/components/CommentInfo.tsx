import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span className="commentName">
      {comment.name}
    </span>
    <br />
    <span className="commentBody">
      {comment.body}
    </span>
    <br />
    <span className="commentEmail">
      {comment.email}
    </span>
  </>
);
