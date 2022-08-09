import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      {' Posted by  '}

      {post.user && (
        <UserInfo
          name={post.user.name}
          email={post.user.email}
        />
      )}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length === 0
      ? (
        <>
          <hr />

          <b>No comments yet</b>
        </>
      )
      : <CommentList comments={post.comments} />}
  </>
);
