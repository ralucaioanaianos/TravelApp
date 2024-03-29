export class User {
  public id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password?: string;
  public profileImage: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    profileImage: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.profileImage = profileImage;
  }
}
