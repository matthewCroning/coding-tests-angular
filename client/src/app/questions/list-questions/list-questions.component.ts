import { QuestionService } from './../../shared/services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {

  questions: any;
  constructor(public QuestionService: QuestionService) { 
    this.QuestionService.findAll().subscribe((questions: any) => {
      this.questions = questions;
    })
  }

  ngOnInit(): void {
  }

}
