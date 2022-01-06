import { PostInfo } from "./PostInfo";
import { PreparedPosts } from "../types/Types";

type Posts = {
  posts: PreparedPosts[];
};

export const PostList: React.FC<Posts> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList__element">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
