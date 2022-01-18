import { Post } from '../types/types';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <ul>
      {posts.map(post => (
        <li className="card text-secondary border border-4" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </>
);
