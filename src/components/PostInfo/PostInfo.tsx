import { PrepPost } from '../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export interface Props {
  prepPost: PrepPost;
}

export const PostInfo: React.FC<Props> = ({ prepPost }) => {
  const {
    title, body, user, prepComments,
  } = prepPost;

  return (
    <div className="postInfo">
      <article className="postInfo__article">
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="postInfo__article-author">{user && <UserInfo user={user} />}</div>
      </article>
      <div className="postInfo__comments">
        {prepComments && <CommentList prepComments={prepComments} />}
      </div>
    </div>
  );
};
