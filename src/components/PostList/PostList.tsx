import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post__list">
    {preparedPosts.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
