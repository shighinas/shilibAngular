export class AuthorsModel {
  constructor(public _id: string,
              public name : string,
              public dob : Date,
              public work : string,
              public awards : string,
              public pic : string,
              public description : string) {}
}
