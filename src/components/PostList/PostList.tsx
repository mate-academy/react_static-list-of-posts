import { PostInfo } from '../PostInfo/PostInfo';
import { Comments } from '../../types/Comments';
import { User } from '../../types/User';

type Post = {
  id: number,
  title: string,
  body:string,
  user: User | null,
  comments: Comments[] | null,
};

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      post.user && post.comments && post.user && (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      )
    ))}
  </ul>
);
