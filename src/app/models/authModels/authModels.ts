export interface userRegister  {

    FullName : string,
    Email : string,
    Password : string,
    MobileNo : number,
    ProfileImg : File  | null,
    Hobbies : string[],
    Gender : string,
    Role : string[]
}