export default class Highlander {
  private static instance: Highlander;

  private constructor() {}

  public static getInstance(): Highlander {
    if (!Highlander.instance) {
      Highlander.instance = new Highlander();
    }

    return Highlander.instance;
  }

  public greet(): string {
    return 'There can be only one!';
  }
}