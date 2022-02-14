import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

type Props = {
  title: string,
  body: string,
  user: User,
  comments: Comment[],
};

export const PostInfo: React.FC<Props> = (postInfo) => {
  const {
    title,
    body,
    user,
    comments,
  } = postInfo;
  const { name, email } = user;

  return (
    <>
      <h2>Post info:</h2>
      <p>
        <b>Post title: </b>
        {title}
      </p>
      <p>
        <b>Post description: </b>
        {body}
      </p>
      <UserInfo name={name} email={email} />
      <CommentList commentList={comments} />
    </>
  );
};
