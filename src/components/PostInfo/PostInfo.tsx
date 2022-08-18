import {UserInfo} from '../UserInfo/UserInfo';
import {CommentList} from '../CommentList/CommentList';
// import { Users } from '../../types/Users';
// import { Posts } from '../../types/Posts';
// import users from '../../api/users';


// type Props = {
//   users: Users[];
// };

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}

      <UserInfo />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {/* <b>No comments yet</b> */}

    <CommentList  {}/>
    </div>
  </>
);

