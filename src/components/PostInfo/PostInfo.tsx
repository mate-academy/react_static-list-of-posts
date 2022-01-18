import { CommmentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="card-header-title">{post.title}</h2>
    <p className="card-content">{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    <CommmentList comments={post.comments} />
  </>
);
