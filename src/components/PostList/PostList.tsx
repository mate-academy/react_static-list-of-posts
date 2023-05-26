import { UserPost } from '../../types/UserPost';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: UserPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.postId} />
    ))}
  </div>
);
