import { PreparedPost } from '../../types/PreparedPost';
import PostInfo from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  preparedPosts: PreparedPost[];
};

const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="PostList">
    {preparedPosts.map(preparedPost => (
      <li className="PostList__item">
        <PostInfo preparedPost={preparedPost} />
      </li>
    ))}
  </ul>
);

export default PostList;
