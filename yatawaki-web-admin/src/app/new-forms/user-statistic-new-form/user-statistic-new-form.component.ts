import { Component, OnInit } from '@angular/core';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

@Component({
  selector: 'app-user-statistic-new-form',
  templateUrl: './user-statistic-new-form.component.html',
  styleUrls: ['./user-statistic-new-form.component.css']
})
export class UserStatisticNewFormComponent implements OnInit {

  userStatistic: UserStatistic = new UserStatistic();
  statuses: any[] = [];

  constructor(private userStatisticService: UserStatisticService) { }

  ngOnInit(): void {
    this.userStatisticService.getUserStatisticStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputTriviasPlayed(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasPlayed = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputTriviasWon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasWon = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputConcertsOrchestrated(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.concertsOrchestrated = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputOrchestrationAccuracy(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.orchestrationAccuracy = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  insertUserStatistic() {
    this.userStatisticService.createUserStatistic(this.userStatistic).subscribe(
      (datos) => console.log(datos)
    );
    this.userStatistic = new UserStatistic();
    //this.router.navigate(['ListCustomer']);
  }

}
