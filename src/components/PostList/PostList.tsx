import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo/PostInfo';

type PostType = {
  posts: Post[],
};

export const PostList = ({ posts }: PostType) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
