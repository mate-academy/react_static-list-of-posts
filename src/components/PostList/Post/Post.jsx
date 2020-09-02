import React from 'react';
import PropTypes from 'prop-types';
import { CommnentList } from '../../CommentList';
import { User } from '../../User';

import './Post.scss';

export const Post = ({
  id,
  title,
  body,
  user,
  comments,
}) => (
  <>
    <li key={id} className="post">
      <p className="title">
        {title}
      </p>
      <p className="text">
        {body}
      </p>
      <User {...user} />
      <CommnentList comments={comments} />
    </li>

  </>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
