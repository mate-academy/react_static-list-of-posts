import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<Props> = ({ posts }: Props) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} />
      ))}
    </div>
  );
};

type Props = {
  posts: Post[];
};
