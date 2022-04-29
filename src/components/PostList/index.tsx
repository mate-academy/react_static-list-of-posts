import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import './style.scss';

type Props = {
  list: Post[];
};

export const PostList: React.FC<Props> = ({ list }) => (
  <ul data-cy="post-info" className="List">
    {list.map((post) => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
