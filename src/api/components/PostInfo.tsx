import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
// import { Post, User } from '../../react-app-env';
import { Post, User, Comment } from './Interfaces';

type Props = {
  post: Post;
  user: User;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  post,
  user,
  comments,
}) => (
  <>
    <h1 className="title">
      {post.title}
    </h1>
    <p className="body">
      {post.body}
    </p>
    {user && <UserInfo user={user} />}
    <CommentList comments={comments} />
  </>
);
