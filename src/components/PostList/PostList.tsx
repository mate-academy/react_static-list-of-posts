import { Post } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="PostList">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
