import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="card" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
