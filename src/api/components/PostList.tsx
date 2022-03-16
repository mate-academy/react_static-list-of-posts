import { Post } from './Interfaces';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <>
        <li key={post.id}>
          {post.user && (
            <PostInfo
              post={post}
              user={post.user}
              comments={post.comments}
            />
          )}
        </li>
      </>
    ))}
  </ul>
);
