import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementService } from '../../service/achievement.service'
import { Achievement } from '../../models/achievement'

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.css']
})
export class AchievementCardComponent implements OnInit {

  achievement: Achievement = new Achievement();
  achievements: Achievement[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;


  constructor(private achievementService: AchievementService, private router: Router) { }

  ngOnInit(): void {
  }

  
  searchAchievementById() {
    this.achievementService.getAchievementById(this.id).subscribe((achievement) => {
      console.log(achievement);
      this.achievement = achievement;
    });
    this.show = true;
    this.showUpdate = false;
    this.showChange = false;
  }

  showUpdateForm(){
    this.showUpdate = true;
    this.show = false;
    this.showChange = false;
  }

  showChangeForm(){
    this.showChange = true;
    this.show = false;
    this.showUpdate = false;
  }

  loadDataAchievements() {
    this.router.navigate(['achievement']);
  }

  updateAchievement() {
    this.achievementService.updateAchievement(this.achievement).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.achievement = new Achievement();
  }

  changeAchievement(){
    this.achievementService.changeAchievement(this.achievement).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.achievement = new Achievement();
  }

  deleteAchievement(achievement: Achievement) {
    this.achievementService.deleteAchievement(achievement.idUnlockable).subscribe((data) => {
      this.loadDataAchievements();
    });
  }


}
