import { CompilerService } from './../../shared/services/compiler.service';
import { QuestionService } from './../../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const themeGithub: string = 'node_modules/highlight.js/styles/github.css';
const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  question: any; 

  code: any;
  code1: any;
  codeCompile: any;

  textData: any;




  currentTheme: string = themeGithub;


  constructor(private QuestionService: QuestionService, public CompilerService: CompilerService, private route: ActivatedRoute) { 
    this.code = `function myFunction() {
      document.getElementById("demo1").innerHTML = "Test 1!";
      document.getElementById("demo2").innerHTML = "Test 2!";
    }`;

    this.QuestionService.findById(this.route.snapshot.paramMap.get('questionId')).subscribe((question: any) => {
      console.log(question);
      this.question = question;
    })
  }

  ngOnInit(): void {
  }

}
