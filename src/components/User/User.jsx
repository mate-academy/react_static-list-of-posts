import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const User = ({ name, email, address, posts }) => (
  <li>
    <span>
      <strong>{`${name} posted:`}</strong>
    </span>

    <br />
    <br />

    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}

    <span>
      {`email: ${email}`}
    </span>

    <br />
    <br />

    <span>
      Address:
    </span>

    <br />

    <span>
      {`city: ${address.city}`}
      ,
    </span>

    <br />

    <span>
      {`street: ${address.street}`}
      ,
    </span>

    <br />

    <span>
      {`suite: ${address.suite}`}
      .
    </span>

    <br />

    <span>
      {`zipcode: ${address.zipcode}`}
      .
    </span>

    <br />
    <br />
    <br />
    <br />
  </li>
);

const TypeGeo = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

const TypeAddress = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,

  geo: TypeGeo,
});

const TypePosts = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  address: TypeAddress,
  posts: PropTypes.arrayOf(TypePosts).isRequired,
};

User.defaultProps = {
  address: {},
};
