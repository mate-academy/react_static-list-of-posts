import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../../types/Posts';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        {' Posted by  '}
        {post.user !== null
          ? <UserInfo user={post.user} />
          : null}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />
      {
        post.comments.length > 0
          ? <CommentList comments={post.comments} />
          : <b>No comments yet</b>
      }
    </div>
  );
};
