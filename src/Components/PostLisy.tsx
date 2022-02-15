import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="tab">
    {
      posts.map(a => (
        <li className="tab__item" key={a.id}>
          <PostInfo
            title={a.title}
            body={a.body}
            user={a.user}
            comments={a.comments}
          />
        </li>
      ))
    }
  </ul>
);
