import { Post } from './Interfaces';
import { PostInfo } from './PostInfo';
import { CommentList } from './CommentList';

type Props = {
  posts: Post[];
  // user: User;
  // comment: Comment;
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <ul>
    {posts.map(post => (
      <>
        <li key={post.id}>
          {post.user && (
            <PostInfo
              post={post}
              user={post.user}
              comment={post.comment}
            />
          )}
        </li>
        <CommentList comment={post.comment} />
      </>
    ))}
  </ul>
);
