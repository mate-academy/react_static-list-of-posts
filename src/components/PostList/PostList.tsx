import { PreparedPost } from '../../types/PreparedPost';
import PostInfo from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[];
};

const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="postList">
    {preparedPosts.map(preparedPost => (
      <li className="postList__item" key={preparedPost.title}>
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);

export default PostList;
