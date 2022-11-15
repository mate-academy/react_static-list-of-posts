import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

interface Props {
  posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <PostInfo
            title={post.title}
            body={post.body}
            id={post.id}
            user={post.user}
          />
        </li>
      ))}
    </ul>
  </div>
);
