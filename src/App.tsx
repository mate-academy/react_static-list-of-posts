import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';
import { Posts } from './types/Post';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] | null {
  const foundComment
  = commentsFromServer.filter((comment) => {
    return comment.postId === postId;
  });

  return foundComment || null;
}

export const wholePost: Posts[] = postsFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
  comments: getComment(todo.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={wholePost} />

    <div className="PostList">
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">qui est esse</h3>
          <p>
            <a className="UserInfo" href="mailto:Sincere@april.biz">
              Leanne Graham
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
          ea dolores neque fugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis qui aperiam non debitis possimus qui neque
          nisi nulla
        </p>

        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>

      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            doloremque illum aliquid sunt
          </h3>

          <p>
            {' Posted by  '}

            <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
              Patricia Lebsack
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          deserunt eos nobis asperiores et hic est debitis repellat molestiae
          optio nihil ratione ut eos beatae quibusdam distinctio maiores earum
          voluptates et aut adipisci ea maiores voluptas maxime
        </p>

        <div className="CommentList">
          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">pariatur omnis in</strong>

              {' by '}

              <a
                className="CommentInfo__email"
                href="mailto:Telly_Lynch@karl.co.uk"
              >
                Telly_Lynch@karl.co.uk
              </a>
            </div>

            <div className="CommentInfo__body">
              dolorum voluptas laboriosam quisquam ab totam beatae et aut
              aliquid optio assumenda voluptas velit itaque quidem voluptatem
              tempore cupiditate in itaque sit molestiae minus dolores magni
            </div>
          </div>

          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">
                odio adipisci rerum aut animi
              </strong>

              {' by '}

              <a
                className="CommentInfo__email"
                href="mailto:Nikita@garfield.biz"
              >
                Nikita@garfield.biz
              </a>
            </div>

            <div className="CommentInfo__body">
              quia molestiae reprehenderit quasi aspernatur aut expedita
              occaecati aliquam eveniet laudantium omnis quibusdam delectus
              saepe quia accusamus maiores nam est cum et ducimus et vero
              voluptates excepturi deleniti ratione
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
