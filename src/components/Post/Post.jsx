import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { userTypes, commentType } from '../../types';

export const Post = ({
  title,
  body,
  user,
  usersComments,
}) => (
  <>
    <div className="post">
      <User {...user} />
      <div className="post__info">
        <p className="post__info-title">
          {`Theme: ${title}`}
        </p>
        <p className="post__info-text">{body}</p>
      </div>
    </div>
    <CommentList comments={usersComments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userTypes,
  usersComments: PropTypes.arrayOf(commentType).isRequired,
};
