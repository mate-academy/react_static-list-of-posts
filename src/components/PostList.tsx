import { PreparedPost } from '../types/PreparedPost';
import { PostInfo } from './PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
