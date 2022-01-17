import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="post">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
