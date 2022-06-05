import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {


  /* istanbul ignore next */
  ranks = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private rankService: RankService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.rankService.getRanks().subscribe(response => {
      console.log(response)
      this.ranks = response;
    });
  }

  /* istanbul ignore next */
  loadDataRanks() {
    this.rankService
      .getRanks()
      .subscribe((ranks) => (this.ranks = ranks));
  }

  /* istanbul ignore next */
  deleteRank(rank: Rank) {
    this.rankService.deleteRank(rank.idRank).subscribe((data) => {
      this.loadDataRanks();
    });
  }

  /* istanbul ignore next */
  changeRank(rank: Rank) {
    this.router.navigate(['sidenavbar/rank-change-form', rank.idRank]);
  }

}
