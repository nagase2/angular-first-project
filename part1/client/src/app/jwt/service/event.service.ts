import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  // こんな感じで、サーバ側で外部サイトから結果を取ってきて表示することも可能。
  private _jsonplaceholderPostUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getEvents() {
    console.log("get events")
    return this.http.get<any>(this._eventUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  /**
   * JsonPlaceholderという外部サイトからサンプルデータを取得する。
   */
  getJsonPost() {
    console.log("get post")
    return this.http.get<any>(this._jsonplaceholderPostUrl)
  }
}
