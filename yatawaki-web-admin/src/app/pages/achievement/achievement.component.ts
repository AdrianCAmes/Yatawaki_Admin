import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../../service/achievement.service'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Achievement } from 'src/app/models/achievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})


export class AchievementComponent implements OnInit {

  /* istanbul ignore next */
  achievements = new Array<any>();

  /* istanbul ignore next */
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private achievementService: AchievementService, private router: Router, public dialog: MatDialog) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.achievementService.getAchievements().subscribe((response) => {
      console.log(response)
      this.achievements = response;
    });
  }

  /* istanbul ignore next */
  loadDataAchievements() {
    this.achievementService
      .getAchievements()
      .subscribe((achievements) => (this.achievements = achievements));
  }

  /* istanbul ignore next */
  deleteAchievement(achievement: Achievement) {
    this.achievementService.deleteAchievement(achievement.idUnlockable).subscribe((data) => {
      console.log(data);
      this.loadDataAchievements();
    });
  }

  
  /* istanbul ignore next */
  updateAchievement(achievement: Achievement) {
    this.router.navigate(['achievement-update-form', achievement.idUnlockable]);
  }

  /* istanbul ignore next */
  changeAchievement(achievement: Achievement) {
    this.router.navigate(['sidenavbar/achievement-change-form', achievement.idUnlockable]);
  }


}
