import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: Post[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
