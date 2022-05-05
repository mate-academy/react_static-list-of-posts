import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const {
    posts,
  } = props;

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li
          className="post-list__item"
          data-cy="post-info"
          key={post.id}
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
