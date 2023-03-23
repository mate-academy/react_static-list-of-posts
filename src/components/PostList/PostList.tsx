import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="PostList">
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
