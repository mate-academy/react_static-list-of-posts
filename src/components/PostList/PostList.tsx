import { LinkedPost } from '../../types/LinkedPost';
import { PostCard } from '../PostCard';

import './PostList.scss';

type Props = {
  posts: LinkedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList" data-cy="post-info">
      {posts.map(post => (
        <li className="PostList__item" key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};
