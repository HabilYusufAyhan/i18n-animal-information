export default class Plant {
  constructor(data = {}) {
    this._data = data;
  }
  get title() {
    return this._data.title || '';
  }
  get extract() {
    return (this._data.translatedExtract || this._data.extract || '').replace(/<[^>]*>/g, '');
  }
  get image() {
    if (this._data.originalimage) return this._data.originalimage.source;
    if (this._data.image) return this._data.image;
    if (this._data.thumbnail) return this._data.thumbnail?.source;
    return null;
  }
  get description() {
    return this._data.description || '';
  }
  get wikiUrl() {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(this.title)}`;
  }
  toJSON() {
    return this._data;
  }
}
