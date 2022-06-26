class Todo {
  private readonly _id: string;
  private readonly _text: string;

  constructor(text: string) {
    this._text = text;
    this._id = new Date().toISOString();
  }

  get id(): string {
    return this._id;
  }

  get text(): string {
    return this._text;
  }
}

export default Todo;
