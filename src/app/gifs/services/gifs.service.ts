import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private readonly http: HttpClient) {
    this._record = JSON.parse(localStorage.getItem('record')!) || [];
    this.result = JSON.parse(localStorage.getItem('result')!) || [];
  }

  private readonly apiKey: string = 'mBOQ4Hc58U9hck8PZCvLTtJhDNICfcwh';
  private readonly baseUrl: string = 'https://api.giphy.com/v1';
  private _record: string[] = [];

  public result: any[] = [];

  get record() {
    return [...this._record];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 5);
      localStorage.setItem('record', JSON.stringify(this._record));
    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', 10);
    this.http
      .get<SearchGifsResponse>(`${this.baseUrl}/gifs/search`, { params })
      .subscribe((res) => {
        this.result = res.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      });
  }
}
