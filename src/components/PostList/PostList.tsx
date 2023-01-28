import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

interface IPosts {
  posts: Post[];
}

export const PostList = ({ posts }: IPosts) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
