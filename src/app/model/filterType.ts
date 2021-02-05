export class FilterType {

  // tslint:disable-next-line:variable-name
  private static _instance: FilterType;

  private constructor() {
  }

  // tslint:disable-next-line:typedef
  public static getInstance() {
    if (!FilterType._instance) {
      FilterType._instance = new FilterType();
    }
    return FilterType._instance;
  }

}
