import React from 'react';
import { PreparedPosts } from '../../app.typedefs';
// import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  preparedPost: PreparedPosts;
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => (
  <>
    <p>{`Post title: ${preparedPost.post.title}`}</p>
    <p>{`Post content: ${preparedPost.post.body}`}</p>

    <div>
      {
        preparedPost.user && (
          <UserInfo user={preparedPost.user} />
        )
      }
    </div>

    {/* <ul>
      <CommentList comments={preparedPost} />
    </ul> */}
  </>
);
