import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <li className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </li>
);
