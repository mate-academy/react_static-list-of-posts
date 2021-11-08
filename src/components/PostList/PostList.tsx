import { Post } from '../../typedefs';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  postItems: Post[];
};

export const PostList:React.FC<Props> = ({ postItems }) => (
  <ul className="posts__list">
    {postItems.map(post => (
      <li key="{post.id}" className="posts__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
