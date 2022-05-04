import { FullPost } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: FullPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
