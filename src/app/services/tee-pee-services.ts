import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
export interface Room {
  id: number;
  room: number;
  remark: string;
}

export interface Property {
  id: number;
  name: string;
  rooms: Room[];
}
@Injectable({
  providedIn: 'root' // Makes service available everywhere
})

export class TeePeeServices {

  apiUrl = "https://teepee-back.vercel.app/blueBells"
  apiUrlPost = "https://teepee-back.vercel.app/blueBells/6ac215c6114fcefb434208fa"
  // apiUrl = "http://localhost:3000/blueBells"
  // apiUrlPost = "http://localhost:3000/blueBells/6ac215c6114fcefb434208fa"
  


  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any[]>(this.apiUrl)
  }
    postProduct(data: any): Observable<any> {
    return this.http.put(this.apiUrlPost, data);
  }
}
