import { PreparedPost } from '../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, preparedComments,
  } = post;

  return (
    <div className="postInfo">
      <article className="postInfo__article">
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="postInfo__article-author">
          {user && <UserInfo user={user} />}
        </div>
      </article>
      <div className="postInfo__comments">
        {preparedComments && <CommentList preparedComments={preparedComments} />}
      </div>
    </div>
  );
};
