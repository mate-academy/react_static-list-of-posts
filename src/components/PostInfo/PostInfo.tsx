import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string,
  body: string,
  userInfo: User | null,
  commentList: PostComment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  userInfo,
  commentList,
}) => (
  <>
    <div className="header">
      <h1 className="card-header-title is-uppercase">{title}</h1>
      <p className="card-content">{body}</p>
      {userInfo
        ? (
          <UserInfo user={userInfo} />
        )
        : 'User was not foung'}
    </div>
    <CommentList comments={commentList} />
  </>
);
