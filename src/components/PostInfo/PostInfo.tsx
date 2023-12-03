import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type PostType = {
  post: Post,
};

export const PostInfo = ({ post }: PostType) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user && <UserInfo key={post.userId} user={post.user} />}
      </div>
      <p className="PostInfo__body">{post.body}</p>
      {post.comments.length
        ? (<CommentList comments={post.comments} />)
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
