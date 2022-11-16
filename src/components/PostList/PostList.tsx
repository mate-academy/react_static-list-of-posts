import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

interface Props {
  posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
      />
    ))}
  </div>
);
