import { Component, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-achievement-new-form',
  templateUrl: './achievement-new-form.component.html',
  styleUrls: ['./achievement-new-form.component.css']
})
export class AchievementNewFormComponent implements OnInit {

  achievement: Achievement = new Achievement();
  statuses: any[] = [];
  unlockerTypes: any[] = [];

  constructor(private achievementService: AchievementService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
    this.unlockableService.getUnlockerTypes().subscribe(
      datos => {
        console.log(datos)
        this.unlockerTypes = datos;
      }
    );
  }

  nullInput(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  insertAchievement() {
    if (this.achievement.description === ''){
      this.achievement.description = null;
    }

    if(this.achievement.icon === ''){
      this.achievement.icon = null;
    }
    
    if(this.achievement.name === ''){
      this.achievement.name = null;
    }
    this.achievementService.createAchievement(this.achievement).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.achievement = new Achievement();
    //this.router.navigate(['ListCustomer']);
  }

}
