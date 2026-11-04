import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList: React.FC<{ posts: Post[] }> = props => (
  <>
    {props.posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
