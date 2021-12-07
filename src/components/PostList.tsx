import { Post } from '../types/Post';
// import { CommentList } from './CommentList';
// import { CommentInfo } from './CommentInfo';
import { PostInfo } from './PostInfo';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  posts: Post[];
};

/* eslint-disable no-param-reassign */

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map((post: Post) => (
      <li key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
        />
        <UserInfo
          name={post.user?.name}
          email={post.user?.email}
        />
        <strong>
          {'Comments: '}
        </strong>
        <CommentList commentsArray={post.comment} />
      </li>
    ))}
  </ul>
);
