import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {' Posted by  '}

      {post.user && (<UserInfo user={post.user} />)}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {
      post.comments.length
        ? <CommentList comments={post.comments} />
        : <b>No comments yet</b>
    }
  </li>
);
