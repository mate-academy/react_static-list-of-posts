import { PostToRender } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostToRender[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
