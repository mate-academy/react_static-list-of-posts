import { FC } from 'react';

import { AllPost } from '../../types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: AllPost;
};

export const PostInfo: FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <article className="PostInfo__content">
        <h2 className="PostInfo__title">{post.title}</h2>
        <p className="PostInfo__text">{post.body}</p>

        {post.user && <UserInfo user={post.user} />}
      </article>
      {/* without ? -> error - Object is possibly 'undefined'.ts(2532) */}
      {!!post.comments?.length && <CommentList comments={post.comments} />}
    </div>
  );
};
