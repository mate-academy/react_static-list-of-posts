import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserType, CommentType, PostType } from '../../type';

import './Post.css';

export const Post = ({ post }) => (
  <>
    <div className="title-wrapper">
      <h2 className="title">
        {post.title}
      </h2>
    </div>
    <p className="post__paragraph">
      {`" ${post.body} " `}
    </p>
    <User user={post.user} />
    <div className="comments">
      <CommentList comments={post.filteredComments} />
    </div>
  </>
);

Post.propTypes = {
  post: PropTypes.arrayOf(PostType).isRequired,
  user: PropTypes.arrayOf(UserType).isRequired,
  filteredComments: PropTypes.arrayOf(CommentType).isRequired,
};
