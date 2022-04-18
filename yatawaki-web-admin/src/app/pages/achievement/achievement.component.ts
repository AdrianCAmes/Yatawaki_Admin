import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../../service/achievement.service'

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achievements = new Array<any>();

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.achievementService.getAchievements().subscribe(response => {
      console.log(response)
      this.achievements = response;
    });
  }

}
