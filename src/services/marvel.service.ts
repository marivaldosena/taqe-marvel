import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  API_URL = 'https://gateway.marvel.com:443/v1/public';
  PUBLIC_KEY = '55e29352a49977269192553b620b7018';
  PRIVATE_KEY = '3d0711143f460cb032d3efa0396bc323e3c27aa8';
  TS = new Date();
  HASH = Md5.hashStr(this.TS +  this.PRIVATE_KEY + this.PUBLIC_KEY);
  AUTH_QUERY_STRING = `apikey=${this.PUBLIC_KEY}&ts=${this.TS}&hash=${this.HASH}`;
  LOCAL_STORAGE: Storage;

  constructor(private http: HttpClient) {
    this.LOCAL_STORAGE = window.localStorage;
  }

  fetchHeroData(heroName: string) {
    const URL = `${this.API_URL}/characters?name=${heroName}&${this.AUTH_QUERY_STRING}`;
    return this.http.get(`${URL}`);
  }

  fetchHeroComics(heroId: number, limit = 20, offset = 0) {
    const URL = `${this.API_URL}/characters/${heroId}/comics?limit=${limit}&offset=${offset}&${this.AUTH_QUERY_STRING}`;
    return this.http.get(`${URL}`);
  }

  fetchComic(url: string) {
    const URL = `${url}?${this.AUTH_QUERY_STRING}`;
    return this.http.get(`${URL}`);
  }

  saveInLocalStorage(dados: {}) {
    if ('localStorage' in window) {
      for (const item in dados) {
        if (typeof(item) === 'object') {
        } else {
          this.LOCAL_STORAGE.setItem(item, dados[item]);
        }
      }
    }
  }
}
