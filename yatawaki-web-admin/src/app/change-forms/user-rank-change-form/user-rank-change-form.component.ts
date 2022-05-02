import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UserRank } from 'src/app/models/user-rank';
import { UserRankService } from 'src/app/service/user-rank.service';

@Component({
  selector: 'app-user-rank-change-form',
  templateUrl: './user-rank-change-form.component.html',
  styleUrls: ['./user-rank-change-form.component.css']
})
export class UserRankChangeFormComponent implements OnInit {

  id: number = 0;
  userRank: UserRank = new UserRank();
  statuses: any[] = [];

  constructor(private route: ActivatedRoute,
    private userRankService: UserRankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userRankService.getUserRankById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.userRank = datos;
      }
    );
    this.userRankService.getUserRankStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputStartDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.startDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputEndDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.endDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputCurrentExperience(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.currentExperience = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.userRank.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeUserRank() {
    this.userRankService.changeUserRank(this.userRank).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.userRank = new UserRank();
  }

}
