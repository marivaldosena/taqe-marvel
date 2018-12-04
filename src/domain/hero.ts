export class Hero {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public resourceURI?: string,
    public comics?: [],
    public events?: [],
    public series?: [],
    public stories?: [],
    public image?: string,
    public comicsAvailable?: number
  ) {}
}
