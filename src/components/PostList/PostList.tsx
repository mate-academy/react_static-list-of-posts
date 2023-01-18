import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

type Posts = {
  posts: Post[]
};

export const PostList: React.FC<Posts> = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
