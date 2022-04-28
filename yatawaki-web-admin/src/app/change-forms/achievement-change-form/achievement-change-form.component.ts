import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement.service';

@Component({
  selector: 'app-achievement-change-form',
  templateUrl: './achievement-change-form.component.html',
  styleUrls: ['./achievement-change-form.component.css']
})
export class AchievementChangeFormComponent implements OnInit {

  id: number = 0;
  achievement: Achievement = new Achievement();

  constructor(private route: ActivatedRoute,
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

  changeAchievement() {
    this.achievementService.changeAchievement(this.achievement).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.achievement = new Achievement();
  }

}
