import { IPreparedPost } from '../../types/Types';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: IPreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map(post => (
        <li
          key={post.id}
          className="post-list__item"
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
