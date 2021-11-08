import { PreparedPost } from '../types';
import { PostInfo } from './Postinfo';
import './PostList.scss';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__post">
        <PostInfo
          key={post.id}
          post={post}
        />
      </li>
    ))}
  </ul>
);
