import React from 'react';
import { mount } from '@cypress/react';
import { UserInfo } from './UserInfo';
import users from '../../api/users';

describe('UserInfo component', () => {
  it('should accept a \'user\' object and render an \'email\'', () => {
    mount(<UserInfo
      user={
        { email: users[0].email }
      }
    />);

    cy.getByDataCy('user-email')
      .should('contain', users[0].email);
  });

  it('should accept a \'user\' object and render a \'name\'', () => {
    mount(<UserInfo
      user={
        { name: users[0].name }
      }
    />);

    cy.getByDataCy('user-name')
      .should('contain', users[0].name);
  });
});
