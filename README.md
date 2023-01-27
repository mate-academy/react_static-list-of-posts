  ( (  (# React Static List of Posts

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

This task is similar to [Static List of TODOs](https://github.com/mate-academy/react_static-list-of-todos#react-static-list-of-todos), but you should do everything yourself:

- don't change classes in the given markup (tests use them);
- create all required types in `./src/types/`;
- prepare `posts` by adding a `user` and `comments` to each `post` (each comment has a `postId`);
- split the `App` into components based on given CSS blocks;
- `List` components should take an array of corresponding objects and render one `Info` component per object;
- `Info` components should take one object and render its data.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://fenderukr.github.io/react_static-list-of-posts/) and add it to the PR description.


export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">qui est esse</h3>

          <p>
            {' Posted by  '}

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
