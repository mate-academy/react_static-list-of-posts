import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li className="media-content block box" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
