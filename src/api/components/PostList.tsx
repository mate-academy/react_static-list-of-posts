import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        {post.user && (
          <PostInfo post={post} />
        )}
      </li>
    ))}
  </ul>
);
