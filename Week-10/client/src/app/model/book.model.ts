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

  public toString(): string
  {
    return `
    Book
    -------------------------------
    Name       : ${this.name}
    Author     : ${this.author}
    Published  : ${this.published}
    Description: ${this.description}
    Price      : ${this.price}
    -------------------------------
    `;
  }
}
