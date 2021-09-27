export interface IUser {
    username:string,
    email:string,
    password:string,
}
export interface IUserModel {
    _id: string,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    status: string,
    expenses: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}
export interface IUserDocument {
  users: IUserModel[],
  count:number 
}
