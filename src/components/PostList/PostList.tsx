import { PostInfo } from '../PostInfo';
import './PostList.scss';
import { Post } from '../../types/Post';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {
      posts.map(post => (
        <li key={post.id} className="posts__post">
          {
            post.user && (
              <PostInfo
                user={post.user}
                comments={post.comments}
                title={post.title}
                body={post.body}
              />
            )
          }
        </li>
      ))
    }
  </ul>
);
