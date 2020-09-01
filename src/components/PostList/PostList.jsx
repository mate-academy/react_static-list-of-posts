import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const PostList = ({ list }) => (
  <main>
    {
      list.map(post => (
        <section className="container" key={post.id}>
          <div className="post">
            <User {...post.user} />
            <Post {...post} />
            <CommentList comments={post.comments} />
          </div>
        </section>
      ))
    }
  </main>
);

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
