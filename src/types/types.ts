export interface User {
  id: number,
  username: string,
  name: string,
  email: string,
}

export interface Comments {
  name: string,
  body: string,
  email: string,
  id: number
}

export interface Posts {
  id: number,
  title: string,
  body: string,
  user: User | null,
  comments: Comments[] | null,
}
