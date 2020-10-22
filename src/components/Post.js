import React from 'react';

import { User } from './User';
import { CommentList } from './CommentList';
import { PostTypes } from './PropTypes/PostTypes';

export const Post = ({ title, body, user, postComments, id }) => (
  <article
    className="
      jumbotron
      px-3
      py-4
      col-sm
      bg
    "
    style={{
      marginRight: '5px',
      background: '#fcbf49',
    }}
  >
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
  </article>
);

Post.propTypes = PostTypes;
