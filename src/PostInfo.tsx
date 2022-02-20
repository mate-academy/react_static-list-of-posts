import { Post } from './Type';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    {post.comments && <CommentList comments={post.comments} />}
  </>
);
