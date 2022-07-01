import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { 

  }

  findAll(){
    return this.http.get('/api/question/findAll');
  }

  findById(id: any){
    return this.http.get('/api/question/findById/' + id);  
  }
}
