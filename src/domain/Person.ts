export class Person {
  name: string
  surname: string
  birthday: Date

  constructor({ name, birthday, surname }) {
    this.name = name
    this.birthday = birthday
    this.surname = surname
  }
}
