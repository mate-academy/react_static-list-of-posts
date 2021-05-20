import React from 'react';
import PropTypes from 'prop-types';

import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { ProtoUser } from '../ProtoPost';

export const Post = ({ title, body, user, commentList }) => (
  <>
    <h2>{title}</h2>
    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList commentList={commentList} />
  </>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: ProtoUser.isRequired,
  commentList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
