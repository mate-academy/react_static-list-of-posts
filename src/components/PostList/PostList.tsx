import { PreparedPost } from '../../types/PreparedPost';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  postList: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ postList }) => (
  <ul className="Postlist">
    {postList.map((post) => (
      <li key={post.id} className="Postlist__item">
        <PostInfo postInfo={post} />
      </li>
    ))}
  </ul>
);
