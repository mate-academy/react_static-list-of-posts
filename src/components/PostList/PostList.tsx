import { PostInfo } from '../PostInfo';
import { Post } from '../../Types/Posts';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostInfo">
        <PostInfo {...post} />
      </div>
    ))}
  </div>
);
