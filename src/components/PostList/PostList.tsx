import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  postList: FullPost[]
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="post-list">
    {postList.map(post => (
      <li className="post-list__item" key={post.id}>
        <PostInfo fullPost={post} />
      </li>
    ))}
  </ul>
);
