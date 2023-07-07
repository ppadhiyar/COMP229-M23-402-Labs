export class Book
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public name?: string,
    public author?: string,
    public published?: string,
    public description?: string,
    public price?: number
  ){}
}
