import './PostInfo.scss';

import { Comments } from '../../types/comment';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/user';

type Props = {
  title: string,
  user: User | undefined,
  body: string,
  comment: Comments[],
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    title,
    user,
    body,
    comment,

  } = props;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          <p>
            {' Posted by  '}

            {user && (
              <UserInfo
                userMail={user.email}
                userName={user.name}
              />
            )}

          </p>
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        <hr />

        <CommentList comments={comment} />
      </div>
    </>
  );
};
