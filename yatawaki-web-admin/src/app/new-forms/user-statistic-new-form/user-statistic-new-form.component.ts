import { Component, OnInit } from '@angular/core';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-statistic-new-form',
  templateUrl: './user-statistic-new-form.component.html',
  styleUrls: ['./user-statistic-new-form.component.css']
})
export class UserStatisticNewFormComponent implements OnInit {

  userStatistic: UserStatistic = new UserStatistic();
  statuses: any[] = [];
  evidencia: any;
  compWindow: any;

  constructor(private router: Router, private userStatisticService: UserStatisticService) { 
    this.compWindow = window;
  }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.userStatisticService.getUserStatisticStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  /* istanbul ignore next */
  nullInputTriviasPlayed(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasPlayed = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputTriviasWon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.triviasWon = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputConcertsOrchestrated(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.concertsOrchestrated = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputOrchestrationAccuracy(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userStatistic.orchestrationAccuracy = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
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
      (datos) => {
        console.log(datos)
        this.evidencia = datos
      }
    );
    this.userStatistic = new UserStatistic();
    return this.router.navigate(['sidenavbar/user-statistic']).then(()=>
    {
      console.log(this.router.url);
      this.compWindow.location.reload();
    })
  }

}
