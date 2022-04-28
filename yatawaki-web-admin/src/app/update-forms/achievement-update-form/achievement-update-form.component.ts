import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement.service';

@Component({
  selector: 'app-achievement-update-form',
  templateUrl: './achievement-update-form.component.html',
  styleUrls: ['./achievement-update-form.component.css']
})
export class AchievementUpdateFormComponent implements OnInit {

  id: number = 0;
  achievement: Achievement = new Achievement();

  constructor( private route: ActivatedRoute,
    private router: Router,
    private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.achievementService.getAchievementById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.achievement = datos;
      }
    );
  }

  actualizarAchievement() {
    if (this.achievement.description === ''){
      this.achievement.description = null;
    }
    if(this.achievement.icon === ''){
      this.achievement.icon = null;
    }
    if(this.achievement.name === ''){
      this.achievement.name = null;
    }
    if(this.achievement.rareness === ''){
      this.achievement.rareness = null;
    }
    if(this.achievement.unlockerType === ''){
      this.achievement.unlockerType = null;
    }
    console.log(JSON.stringify(this.achievement))
    this.achievementService.updateAchievement(this.achievement).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.achievement = new Achievement();
  }

}
