import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import UserInfo from './UserInfo';
import { CommentType } from './CommentType';

const User = ({ name, email, address, comments }) => (
  <>
    <h4 className="author">
      Author:&nbsp;
      {name}
    </h4>
    <p className="email">
      Email:&nbsp;
      {email}
    </p>
    <UserInfo {...address} />
    <CommentList comments={comments} />
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  comments: CommentType,
  address: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired),
};

export default User;
