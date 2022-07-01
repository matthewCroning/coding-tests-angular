import { ListQuestionsComponent } from './questions/list-questions/list-questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuestionComponent } from './questions/view-question/view-question.component';

const routes: Routes = [
  { path: '',
    component: ListQuestionsComponent,
    pathMatch: 'full',
  },
  { path: ':questionId',
    component: ViewQuestionComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
