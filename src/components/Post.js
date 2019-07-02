import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Post = ({ data }) => (
  <li>
    <div>{data.title}</div>

    <div>
      <textarea name="text" id="post-field" cols="60" rows="10">
        {data.body}
      </textarea>
      <User />

    </div>
  </li>
);

export default Post;
