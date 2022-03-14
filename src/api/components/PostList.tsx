import { Post, Comment } from './Interfaces';
import { PostInfo } from './PostInfo';
import comments from '../comments';
// import { Post } from '../../react-app-env';

type Props = {
  posts: Post[];
  comments: Comment[];
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
              comments={comments}
            />
          )}
        </li>
      </>
    ))}
  </ul>
);
