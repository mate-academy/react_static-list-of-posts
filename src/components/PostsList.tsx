import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

export const PostsList: React.FC<{ posts: Post[]; }> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </>
);
