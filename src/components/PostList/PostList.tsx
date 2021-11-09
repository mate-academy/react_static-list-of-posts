import { Post } from '../../typedefs';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul className="posts__list">
    {posts.map(post => (
      <li key="{post.id}" className="posts__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
