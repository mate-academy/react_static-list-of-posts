import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li
        key={post.id}
        className="postList"
      >
        <div data-cy="post-info">
          <PostInfo
            title={post.title}
            body={post.body}
          />

          <UserInfo user={post.user} />

          <CommentList comments={post.comments} />
        </div>
      </li>
    ))}
  </ul>
);
