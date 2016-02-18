let _apiBase = null;

export default class Base {
  static set apiBase(value) {
    _apiBase = value;
  }

  static get apiBase() {
    return _apiBase;
  }

  static get path() {
    throw new Error('path accessor is not yet implmented.');
  }
}
