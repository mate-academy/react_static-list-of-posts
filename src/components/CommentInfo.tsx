import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span className="post__commentName">
      {comment.name}
    </span>
    <br />
    <span className="post__commentBody">
      {comment.body}
    </span>
    <br />
    <span className="post__commentEmail">
      {comment.email}
    </span>
  </>
);
