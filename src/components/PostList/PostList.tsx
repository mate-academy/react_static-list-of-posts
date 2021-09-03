import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="list">
    {posts.map(post => (
      <li key={post.id} className="post">
        <PostInfo posts={post} />
      </li>
    ))}
  </ul>
);
