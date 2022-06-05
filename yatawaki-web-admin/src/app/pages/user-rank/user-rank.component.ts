import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRank } from 'src/app/models/user-rank';
import { UserRankService } from 'src/app/service/user-rank.service';

@Component({
  selector: 'app-user-rank',
  templateUrl: './user-rank.component.html',
  styleUrls: ['./user-rank.component.css']
})
export class UserRankComponent implements OnInit {

  /* istanbul ignore next */
  userRanks = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private userRankService: UserRankService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.userRankService.getUserRanks().subscribe(response => {
      console.log(response)
      this.userRanks = response;
    });
  }

  /* istanbul ignore next */
  loadDataUserRanks() {
    this.userRankService
      .getUserRanks()
      .subscribe((userRanks) => (this.userRanks = userRanks));
  }

  /* istanbul ignore next */
  deleteUserRank(userRank: UserRank) {
    this.userRankService.deleteUserRank(userRank.idUserRank).subscribe((data) => {
      this.loadDataUserRanks();
    });
  }

  /* istanbul ignore next */
  changeUserRank(userRank: UserRank) {
    this.router.navigate(['sidenavbar/user-rank-change-form', userRank.idUserRank]);
  }

}
