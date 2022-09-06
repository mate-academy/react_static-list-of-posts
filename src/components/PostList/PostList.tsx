import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </ul>
);
