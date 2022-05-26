import React from 'react';
import CommentsList from '../Comments/CommentsList';
import { PreparedPostsType } from '../../types/PreparedPosts';
import cover from '../../images/news.jpg';
import './PostInfo.scss';

interface Props {
  post: PreparedPostsType
}

const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    author,
    body,
    comments,
  } = post;

  return (
    <div className="Post">
      <div className="Post__block">
        <div className="Post__cover">
          <img src={cover} alt="cover" />
        </div>
        <div className="Post__body">
          <div className="Post__meta">
            {author && (
              <>
                <p>{author.name}</p>
                <p>{author.email}</p>
              </>
            )}
          </div>
          <a href="/">
            <h2>{title}</h2>
          </a>
          <p>{body}</p>
        </div>
      </div>
      <div className="Post__comments">
        <h3 className="Post__comments-title">Comments</h3>
        {comments && (
          <CommentsList comments={comments} />
        )}
      </div>
    </div>
  );
};

export default PostInfo;
