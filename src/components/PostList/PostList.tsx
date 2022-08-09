import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map(post => (
        <div className="PostInfo" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  </>
);
