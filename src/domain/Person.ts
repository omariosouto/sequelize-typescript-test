import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Person extends Model<Person> {

  @Column
  name: string;

  @Column
  surname: string;

  @Column
  birthday: Date;

  constructor({ name, birthday, surname }) {
    super()
    this.name = name
    this.birthday = birthday
    this.surname = surname
  }
}
