import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Posts } from '../../types/postsAll';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const commentsLists = post.comment;
  const commentsListLength = commentsLists.length;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {' Posted by  '}
        {
          post.user
            ? <UserInfo user={post.user} />
            : ''
        }
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {commentsListLength
        ? <CommentList commentsList={commentsLists} />
        : <b>No comments yet</b>}
    </div>
  );
};
