import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <li key={post.id} className="PostList_Item">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
