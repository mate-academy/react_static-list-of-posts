import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPosts } from '../../types/PreparedPosts';
import './PostList.scss';

type Props = {
  arrOfPosts : PreparedPosts[]
};

export const PostList: React.FC<Props> = ({ arrOfPosts }) => (
  <ul className="posts">
    {arrOfPosts.map(post => (
      <li className="posts__post" key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
