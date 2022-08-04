import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
