import { Posts } from '../../Types/posts';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <li key={post.id} className="postList__item">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
