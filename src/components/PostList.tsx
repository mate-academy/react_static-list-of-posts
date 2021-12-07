import { PostInfo } from './PostInfo';
import { Post } from '../types/Post';

export const PostList: React.FC<{ posts: Post[]; }> = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </>
);
