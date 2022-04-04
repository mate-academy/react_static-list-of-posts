import React from 'react';
import { Post } from '../../types/Post';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';

// import './PostInfo.scss';

type Props = {
  post: Post,
};

const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post">
      <h2 className="post_title">{post.title}</h2>
      <p className="post_body"><i>{post.body}</i></p>
    </div>
    <hr />
    {post.user && (
      <UserInfo
        name={post.user.name}
        email={post.user.email}
      />
    )}
    {post.comments && (
      <CommentList comments={post.comments} />
    )}
  </>
);

export default PostInfo;
