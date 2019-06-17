import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }
  getNoticias(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0383fb256ceb436e9c09d936f1f99fc5`)
  }
}
