import { Comments } from '../../typedefs';

type Props = {
  comment: Comments
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p className="posts__comment-name">{comment.name}</p>
    <p className="posts__comment-body">{comment.body}</p>
    <p className="posts__comment-email">{comment.email}</p>
  </>
);
