import { PrepPost } from '../types';
import { PostInfo } from '../PostInfo/PostInfo';

export type Props = {
  posts: PrepPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
