import { Post } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li key={post.id} className="posts__post">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
