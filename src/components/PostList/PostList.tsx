import { PostInfo } from '../PostInfo';
import { Post } from '../../types';

type Props = {
  posts: Post[];
};

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
