interface PlantData {
  title?: string;
  extract?: string;
  translatedExtract?: string;
  image?: string;
  originalimage?: { source: string };
  thumbnail?: { source: string };
  description?: string;
  [key: string]: any; // Diğer alanlar için esneklik
}

export default class Plant {
  private _data: PlantData;

  constructor(data: PlantData = {}) {
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
    if (this._data.thumbnail) return this._data.thumbnail.source;
    return null;
  }

  get description(): string {
    return this._data.description || '';
  }

  get wikiUrl(): string {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(this.title)}`;
  }

  toJSON(): PlantData {
    return this._data;
  }
}
