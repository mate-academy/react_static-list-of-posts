import { PostInfo } from '../PostInfo';
import { Post } from '../../Types/Post';

export const PostList = (postsArray: Post[]) => (
  postsArray.map(post => (
    <div className="PostList" key={post.id}>
      {PostInfo(post)}
    </div>
  ))
);
