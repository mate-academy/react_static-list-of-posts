import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="postList">
    {preparedPosts.map(post => (
      <li className="postList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
