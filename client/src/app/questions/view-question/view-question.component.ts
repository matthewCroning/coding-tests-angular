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
    

    this.QuestionService.findById(this.route.snapshot.paramMap.get('questionId')).subscribe((question: any) => {
      console.log(question);
      this.question = question;
      this.code = question.sampleCode;
    })
  }

  ngOnInit(): void {
  }

}
