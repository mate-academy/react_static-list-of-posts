import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../interfaces/postInterface';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comment={post.comment}
        />
      </li>
    ))}
  </ul>
);
