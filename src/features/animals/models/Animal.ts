import i18n from 'i18next';

interface AnimalData {
  title?: string;
  extract?: string;
  translatedExtract?: string;
  originalimage?: { source: string };
  image?: string;
  thumbnail?: { source: string };
  description?: string;
  [key: string]: any;
}
export default class Animal {
  private _data: AnimalData;
  constructor(data = {}) {
    this._data = data;
  }

  get title(): string {
    return this._data.title || '';
  }

  get extract(): string {
    return (this._data.translatedExtract || this._data.extract || '').replace(/<[^>]*>/g, '');
  }

  get image(): string | null {
    if (this._data.originalimage) return this._data.originalimage.source;
    if (this._data.image) return this._data.image;
    if (this._data.thumbnail) return this._data.thumbnail?.source;
    return null;
  }

  get description(): string {
    return this._data.description || '';
  }

  get wikiUrl(): string {
    return `https://${i18n.language}.wikipedia.org/wiki/${encodeURIComponent(this.title)}`;
  }

  toJSON(): AnimalData {
    return this._data;
  }
}
