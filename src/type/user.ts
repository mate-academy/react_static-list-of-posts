export interface User {
  id:number;
  name:string;
  username:string;
  email:string;
}

export type UserInfoType = {
  user:User;
};
