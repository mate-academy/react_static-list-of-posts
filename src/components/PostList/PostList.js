import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';
import { Post } from '../Post/Post';

export const PostList = (props) => {
  const { postList } = props;

  return (
    <ul className="postList">
      {postList.map((post) => {
        const { user, comments, id, title, body } = post;

        return (
          <Post
            key={id}
            title={title}
            body={body}
            user={user}
            comments={comments}
          />
        );
      })}
    </ul>
  );
};

PostList.propTypes = {
  postList: PropTypes.arrayOf({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      adress: PropTypes.object.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
