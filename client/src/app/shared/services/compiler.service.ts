import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  constructor(private http: HttpClient) { }

  compile(code: any){
    this.http.post('/api/compiler/compile', {lang: "Java", code: code, inputRadio: false}).subscribe((data: any) =>{
      console.log(data);
    })  
  }
}
