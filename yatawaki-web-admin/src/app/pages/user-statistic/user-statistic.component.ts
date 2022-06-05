import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatistic } from 'src/app/models/user-statistic';
import { UserStatisticService } from 'src/app/service/user-statistic.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.css']
})
export class UserStatisticComponent implements OnInit {
  
  /* istanbul ignore next */
  userStatistics = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private userStatisticService: UserStatisticService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.userStatisticService.getUserStatistics().subscribe(response => {
      console.log(response)
      this.userStatistics = response;
    });
  }

  /* istanbul ignore next */
  loadDataUserStatistics() {
    this.userStatisticService
      .getUserStatistics()
      .subscribe((userStatistics) => (this.userStatistics = userStatistics));
  }

  /* istanbul ignore next */
  deleteUserStatistic(userStatistic: UserStatistic) {
    this.userStatisticService.deleteUserStatistic(userStatistic.idUserStatistics).subscribe((data) => {
      this.loadDataUserStatistics();
    });
  }

  /* istanbul ignore next */
  changeUserStatistic(userStatistic: UserStatistic) {
    this.router.navigate(['sidenavbar/user-statistic-change-form', userStatistic.idUserStatistics]);
  }

}
