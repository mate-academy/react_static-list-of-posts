import { UserInfo } from './UserInfo';
import { CommentInfo } from './CommentInfo';
import { Post, User, Comment } from './Interfaces';

type Props = {
  post: Post;
  user: User;
  comment: Comment;
};

export const PostInfo: React.FC<Props> = ({
  post,
  user,
  comment,
}) => (
  <>
    <h1 className="title">
      {post.title}
    </h1>
    <p className="body">
      {post.body}
    </p>
    {user && <UserInfo user={user} />}
    {comment && <CommentInfo comment={comment} />}
  </>
);
