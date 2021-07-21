import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../user/user';
import { CommentList } from '../commentlist/commentlist';
import { TypeUser, TypeComment } from '../../type';

import './post.scss';

export const Post = ({ title, body, user, filteredComent }) => (
  <>
    <h2 className="title">
      {title}
    </h2>
    <p className="text">
      {`${body}`}
    </p>
    <User {...user} />
    <div>
      <CommentList filteredComents={filteredComent} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  filteredComent: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
