import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface ReceivedPosts {
  posts: Post[];
}

export const PostList: React.FC<ReceivedPosts> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
