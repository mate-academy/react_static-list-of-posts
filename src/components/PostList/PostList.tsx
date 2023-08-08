import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

export type PostListProps = {
  posts: Post[]
};

export const PostList = ({ posts }: PostListProps) => (
  <div className="PostList">
    {posts.map(
      (post) => {
        return (
          <PostInfo post={post} key={post.id} />
        );
      },
    )}
  </div>
);
