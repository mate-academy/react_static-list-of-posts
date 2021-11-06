import { PostFull } from '../../types/typesdef';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: PostFull
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    id,
    title,
    body,
    author,
    comments,
  } = post;

  return (
    <article>
      <h2>{`Article #${id}. ${title}`}</h2>

      <p>{body}</p>

      {author && (
        <UserInfo author={author} />
      )}

      <h3>Commets</h3>
      <CommentList comments={comments} />
    </article>
  );
};
