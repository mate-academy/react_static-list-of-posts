import { Post } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map((post: Post) => (
        <PostInfo
          key={post.id}
          info={post}
          user={post.user}
          comment={post.comments}
        />
      ))}
    </ul>
  );
};
