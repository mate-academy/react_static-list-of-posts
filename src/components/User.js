import React from 'react';
import PropTypes from 'prop-types';

const User = ({ item }) => (
  <div>
    <span>
      <b>The name of the author of the post: </b>{item.name} <br />
    </span>
    <span>
      <b>The email of the author of the post: </b>{item.email}
    </span>
  </div>
);

User.propTypes = {
  item: PropTypes.object.isRequired,
};

export default User;
