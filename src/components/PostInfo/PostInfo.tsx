import { FC } from 'react';
import FullPost from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './postInfo.scss';

interface Props {
  post: FullPost
}

export const PostInfo:FC<Props> = ({ post }) => (
  <>
    {post.user && (<UserInfo user={post.user} />)}

    <h2 className="post-list__title">
      {post.title}
    </h2>
    <p className="post-list__body">
      {post.body}
    </p>

    {post.comments.length && (<CommentList comments={post.comments} />)}
  </>
);
