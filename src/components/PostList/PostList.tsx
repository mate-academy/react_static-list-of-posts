import './PostList.scss';
import PostInfo from './PostInfo/PostInfo';
import { Post } from '../../types/types';

type Props = {
  postList: Post[]
};

const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <ul className="post-list">
      {postList.map(post => (
        <li className="post-list__block" key={post.id}>
          <PostInfo postInfo={post} />
        </li>

      ))}
    </ul>
  );
};

export default PostList;
