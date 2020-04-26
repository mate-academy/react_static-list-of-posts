import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

const User = ({ item }) => {
  const { name, email } = item.users;
  const { street, suite, city, zipcode } = item.users.address;

  return (
    <>
      <article>
        <p>
          {name}
          {' '}
          {email}
        </p>
        <p>
          {street}
          {' '}
          {suite}
          {' '}
          {city}
          {' '}
          {zipcode}
        </p>
        <li className="li__inside">
          <CommentList item={item} />
        </li>
      </article>
    </>
  );
};

User.propTypes = {
  item: PropTypes.string.isRequired,
};

export default User;
