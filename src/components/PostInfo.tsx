import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

export const PostInfo: React.FC<{ post: Post; }> = ({ post }) => (
  <div className="post" key={post.id}>
    <h2 className="post__title">
      {post.title}
    </h2>

    {post.user && (
      <UserInfo user={post.user} />
    )}
    <div className="post__body">
      {post.body}
    </div>
    <CommentList comments={post.comments} />
  </div>
);
