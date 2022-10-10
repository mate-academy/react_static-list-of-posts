import users from './users';

import { User } from '../types/User';

type GetUser = (id: number) => User | undefined;

export const getUser: GetUser = (id) => users.find(user => user.id === id);
