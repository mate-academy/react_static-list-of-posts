import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './Post.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li className="post">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
