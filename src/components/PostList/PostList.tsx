import { PreparedPost } from '../types';
import { PostInfo } from '../PostInfo/PostInfo';

export type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
