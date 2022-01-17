import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    {post.comments && (
      <CommentList comments={post.comments} />
    )}
  </>
);
