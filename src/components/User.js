import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

const User = ({ name, email, address: { city, street, zipcode, suite }, comments }) => (
  <>
    <h4 className="author">
      Author:&nbsp;
      {name}
    </h4>
    <p className="email">
      Email:&nbsp;
      {email}
    </p>
    <p className="address">
      City:&nbsp;
      {city}
      , zipcode:&nbsp;
      {zipcode}
      , street:&nbsp;
      {street}
      , suite:&nbsp;
      {suite}
    </p>
    <CommentList comments={comments} />
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  address: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default User;
