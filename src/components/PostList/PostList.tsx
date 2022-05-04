import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <PostInfo key={post.id} {...post} />
    ))}
  </div>
);
