import React from 'react';
import './PostInfo.scss';

import { FBPost } from '../../interfaces/FBPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: FBPost,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <fieldset>
    <legend>
      <mark>
        This block is rendered by&#160;
        <b>
          &#34;PostInfo&#34;
        </b>
        &#160;component
      </mark>
    </legend>
    <hr />
    Title:&#160;&#160;
    <b>{post.title}</b>
    <br />
    User:&#160;&#160;
    {post.user ? (
      <UserInfo user={post.user} />
    ) : 'incognito user'}
    <br />
    Body:&#160;&#160;
    <i>
      {post.body}
    </i>
    <br />
    <hr />
    <CommentList comments={post.comments} />
  </fieldset>
);
