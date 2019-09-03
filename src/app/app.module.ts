import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';
import { QuestionComponent } from './quiz/question/question.component';

const appRoutes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
