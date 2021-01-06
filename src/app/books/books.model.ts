export class BooksModel {
  constructor(public _id: string,
              public title : string,
              public author : string,
              public genre: string,
              public publisher : string,
              public awards : string,
              public pic : string,
              public review : string) {}
}
