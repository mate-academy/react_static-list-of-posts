import { Posts } from '../../types/posts';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${post.user?.email}`}>
        {post.user?.name}
      </a>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>
    <CommentList comments={post.comments} />
  </div>
);
