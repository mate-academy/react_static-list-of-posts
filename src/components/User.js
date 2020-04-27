import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import UserInfo from './UserInfo';
import { PropsType } from './CommentType';

const User = ({ author, comments }) => (
  <>
    <h4 className="author">
      Author:&nbsp;
      {author.name}
    </h4>
    <p className="email">
      Email:&nbsp;
      {author.email}
    </p>
    <UserInfo {...author.address} />
    <CommentList comments={comments} />
  </>
);

User.propTypes = {
  author: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]).isRequired,
  ).isRequired,
  comments: PropsType,
};

export default User;
