import { Post } from '../../types/Types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type PropPosts = {
  posts: Post[]
};

export const PostList: React.FC<PropPosts> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="post">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
