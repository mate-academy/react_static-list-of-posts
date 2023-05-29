import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList" style={{ listStyleType: 'none' }}>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
