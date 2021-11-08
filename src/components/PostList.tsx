import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

interface Props {
  postItems: Post[];
}

export const PostList: React.FC<Props> = ({ postItems }) => (
  <ul className="post">
    {postItems.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
