import { Post } from '../Types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post-list list">
    {
      posts.map(post => (
        <li className="post-list__item post list__item" key={post.id}>
          <PostInfo
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        </li>
      ))
    }
  </ul>
);
