import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post">
    {posts.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
