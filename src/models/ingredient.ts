export class Ingredient {
  public id: string;

  constructor(public title: string, public amount: number) {
    this.id = Math.random().toString();
  }
}
