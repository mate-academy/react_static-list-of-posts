import { Post } from '../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <span className="postTitle">
      {post.title}
    </span>

    <br />
    <span className="postBody">
      {post.body}
    </span>
  </>
);
