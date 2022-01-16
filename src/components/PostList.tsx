import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { PostInfo } from './PostInfo';
import { CommentList } from './CommentList';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id} className="post">
        <PostInfo post={post} />
        <br />
        {(post.user)
          ? <UserInfo user={post.user} />
          : null}
        <CommentList
          id={post.id}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
