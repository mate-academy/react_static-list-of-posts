import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
};

export const PostList = ({ posts }: Props) => {
  return (
    <div className="PostList">
      {posts
        .map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
