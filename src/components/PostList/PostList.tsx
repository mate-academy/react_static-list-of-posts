import './PostList.scss';
import PostInfo from './PostInfo/PostInfo';
import { Post } from '../../types/types';

type Props = {
  posts: Post[]
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map(post => (
        <li className="post-list__block" key={post.id}>
          <PostInfo postInfo={post} />
        </li>

      ))}
    </ul>
  );
};

export default PostList;
