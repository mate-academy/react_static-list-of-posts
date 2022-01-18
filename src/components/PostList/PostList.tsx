import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="card">
        <PostInfo
          title={post.title}
          body={post.body}
          userInfo={post.user}
          commentList={post.comments}
        />
      </li>
    ))}
  </ul>
);
