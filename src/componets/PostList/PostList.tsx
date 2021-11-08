import { PostWithUserAndComments } from '../../types/typesdef';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Props {
  posts: PostWithUserAndComments[]
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="PostList">
      {posts.map(post => (
        <li className="PostList__item" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
