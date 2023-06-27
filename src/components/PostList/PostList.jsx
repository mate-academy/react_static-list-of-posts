import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </section>
);
