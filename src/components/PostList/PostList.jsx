import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.scss';

export const PostList = ({ list }) => (
  <section className="post">
    {list.map(elem => <Post key={elem.id} {...elem} />)}
  </section>
);

PostList.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;
