import React from 'react';
import PropTypes from 'prop-types';
import {User} from '../User/User';
import {CommentList} from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({
  user,
  commentsToPost,
  postCopy,
}) => (
  <div className="post">
    <User props={user} />
    <hr />
    <h2 className="post__header">{postCopy.title}</h2>
    <p className="post__message">{postCopy.body}</p>
    <div className="comment">
      <CommentList props={commentsToPost} />
    </div>
    <hr />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  commentsToPost: PropTypes.array,
  postCopy: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}
