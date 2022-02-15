import { CommentInfo } from './CommentInfo';
import { Post } from './Type';
import { UserInfo } from './UserInfo';

export type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    {post.comments && <CommentInfo comments={post.comments} />}
  </>
);
