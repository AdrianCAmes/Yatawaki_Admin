import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

@Component({
  selector: 'app-user-statistic-card',
  templateUrl: './user-statistic-card.component.html',
  styleUrls: ['./user-statistic-card.component.css']
})
export class UserStatisticCardComponent implements OnInit {

  userStatistic: UserStatistic = new UserStatistic();
  sserStatistics: UserStatistic[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private userStatisticService: UserStatisticService, private router: Router) { }

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

  searchUserStatisticById() {
    this.userStatisticService.getUserStatisticById(this.id).subscribe((userStatistic) => {
      console.log(userStatistic);
      this.userStatistic = userStatistic;
    });
    this.show = true;
    this.showChange = false;
  }


  /* istanbul ignore next */
  showChangeForm(){
    this.showChange = true;
    this.show = false;
  }

  /* istanbul ignore next */
  loadDataUserStatistics() {
    this.router.navigate(['user-statistic']);
  }


  /* istanbul ignore next */
  changeUserStatistic(){
    this.userStatisticService.changeUserStatistic(this.userStatistic).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.userStatistic = new UserStatistic();
  }

  /* istanbul ignore next */
  deleteUserStatistic(userStatistic: UserStatistic) {
    this.userStatisticService.deleteUserStatistic(userStatistic.idUserStatistics).subscribe((data) => {
      this.loadDataUserStatistics();
    });
  }
}
