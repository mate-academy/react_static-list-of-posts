import { PostFull } from '../../types/typesdef';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PostFull[]
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
