import { FullPost } from '../../types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <>
      <h2>{title}</h2>
      {' writed by'}
      <strong>
        {(user)
          ? (<UserInfo user={user} />)
          : ('Anonymus')}
      </strong>
      <p>{body}</p>

      {comments.length === 0 ? (
        <p>No comments</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </>
  );
};
