import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  userAnswers: any[] = [];
  userName: any;
  questionsList: any;
  answers: any[] = [];

  constructor(private quizService: QuizService) { }

  getQuestionsFromService(): any {
    this.quizService.getQuestions().subscribe(response => this.questionsList = response);
  }

  // getUserInfo(): any {
  //   this.quizService.getScores().subscribe(response => this.userInfo = response);
  // }

  submitQuiz(userForm: any): void {
    // Takes userForm and breaks it down into usable parts. We need a userName to come out of it.
    // We get the score by taking each answer
    this.userName = userForm.value.username;
    const userScore = 0;
    // const answers = this.questionsList.answer.values;
    let x;
    // console.log(`Answers from QuestionsList = ${answers}`);
    for (x in userForm.value) {
      this.userAnswers.push(userForm.value[x]);
    }
    console.log(this.userAnswers);
    // You left off thinking that now that you have an array of the users answers you can now iterate through the array
    // We also need to array the answers from the questions list.

    // this.quizService.checkScore(userForm);

  }

  ngOnInit() {
    this.getQuestionsFromService();
  }

}
