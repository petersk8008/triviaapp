import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(`http://localhost:8100/questions`);
  }

  getScores(): Observable<any> {
    return this.http.get(`http://localhost:8100/scores`);
  }

  postScore(newUser: object): Observable<any> {
    return this.http.post(`http://localhost:8100/scores`, newUser);
  }

  checkScore(userForm: object): void {

  }
}
