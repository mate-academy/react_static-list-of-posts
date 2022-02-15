import { PreparedPost } from '../types/PreparedPost';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item" key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
