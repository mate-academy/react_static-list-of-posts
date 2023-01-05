import { PreparedPost } from '../../types/prepearedPost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map(post => (
        <div className="PostList" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </>
  );
};
