import posts from '../../src/api/posts.ts'
import users from '../../src/api/users.ts'
import comments from '../../src/api/comments.ts'

const page = {
  post() {
    return cy.getByDataCy('post-info')
      .eq(0);
  }
}

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should contain 100 posts', () => {
    cy.getByDataCy('post-info')
      .should('have.length', posts.length);
  });

  it('should contain posts with 5 comments for each', () => {
    cy.getByDataCy('comment-list')
      .eq(0)
      .children()
      .should('have.length', 5);
  });

  it('should contain posts with the name of publisher', () => {
    page.post()
      .find('[data-cy="user-name"]')
      .should('contain', users[0].name);
  });

  it('should contain posts with the email of publisher', () => {
    page.post()
      .find('[data-cy="user-email"]')
      .should('contain', users[0].email);
  });
});
