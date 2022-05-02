import { Component, OnInit } from '@angular/core';
import { UserRank } from 'src/app/models/user-rank';
import { UserRankService } from 'src/app/service/user-rank.service';

@Component({
  selector: 'app-user-rank-new-form',
  templateUrl: './user-rank-new-form.component.html',
  styleUrls: ['./user-rank-new-form.component.css']
})
export class UserRankNewFormComponent implements OnInit {
  
  userRank: UserRank = new UserRank();
  statuses: any[] = [];

  constructor(private userRankService: UserRankService) { }

  ngOnInit(): void {
    this.userRankService.getUserRankStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }


  insertUserRank() {
    this.userRankService.createUserRank(this.userRank).subscribe(
      (datos) => console.log(datos)
    );
    this.userRank = new UserRank();
    //this.router.navigate(['ListCustomer']);
  }


}
