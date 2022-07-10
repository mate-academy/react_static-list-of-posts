import posts from '../../src/api/posts.ts'
import users from '../../src/api/users.ts'
import comments from '../../src/api/comments.ts'

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain all the posts', () => {
    cy.get('.PostInfo')
      .should('have.length', posts.length);
  });

  it('should contain the first post user', () => {
    const post = posts[0];
    const user = users.find(user => user.id === post.userId);

    cy.get('.PostInfo .UserInfo')
      .eq(0)
      .should('have.text', user.name);
  });

  it('should contain the first post comments', () => {
    const post = posts[0];
    const postComments = comments.filter(comment => comment.postId === post.id);

    cy.get('.CommentList')
      .eq(0)
      .children()
      .should('have.length', postComments.length);
  });
});
