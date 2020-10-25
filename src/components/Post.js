import React from 'react';

import { User } from './User';
import { CommentList } from './CommentList';
import { PostShape } from './shapes/PostShape';

export const Post = ({ title, body, user, postComments, id }) => (
  <>
    <h4
      className="
        text-uppercase
        text-center
      "
      style={{ fontSize: 20.1 }}
    >
      {title}
    </h4>

    <p
      className="
        lead
        text-justify
      "
      style={{ fontSize: 15 }}
    >
      {body}
    </p>

    <User user={user} />
    <hr className="my-3" />

    <b style={{ fontSize: 15 }}>Users comments</b>
    <CommentList comments={postComments} postId={`post-${id}`} />
  </>
);

Post.propTypes = PostShape;
