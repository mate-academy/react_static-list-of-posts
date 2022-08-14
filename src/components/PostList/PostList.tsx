import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = (props) => (
  <div className="PostList">
    {props.posts.map(post => (
      <PostInfo
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
      />
    ))}
  </div>
);
