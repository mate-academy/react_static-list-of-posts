import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map(post => {
        return (
          <PostInfo
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  </>
);
