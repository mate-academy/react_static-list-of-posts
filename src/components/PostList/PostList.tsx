import { Post } from '../../types';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[];
}

export const PostList = ({ posts } : Props) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
