import PropTypes from 'prop-types';
import React from 'react';
import './PostList.scss';

import { Post } from '../Post';
import { TypeUser, TypeComments } from '../../Types/types';

export function PostList({
  postsList,
}) {
  const renderedPosts = postsList.map((post) => {
    const { body, comments, id, title, user } = post;

    return (
      <Post
        key={id}
        body={body}
        comments={comments}
        title={title}
        user={user}
      />
    );
  });

  return (
    <ul className="post__list">
      {renderedPosts}
    </ul>
  );
}

PostList.propTypes = {
  postsList: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      comments: TypeComments.isRequired,
      user: TypeUser.isRequired,
    }),
  ).isRequired,
};
