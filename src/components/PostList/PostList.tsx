import { Post } from '../../types/types';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
