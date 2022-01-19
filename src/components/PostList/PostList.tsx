import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="list-group center">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
