import { Post } from '../../types';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="PostInfo__heading">
      {post.title}
    </h2>
    <div className="PostInfo__text">
      <article className="PostInfo__article">
        <p className="PostInfo__body">
          {post.body}
        </p>
        <UserInfo
          user={post.user}
        />
      </article>
      <CommentList
        comments={post.comments}
      />
    </div>
  </>
);
