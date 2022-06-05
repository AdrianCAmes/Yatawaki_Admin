import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementService } from '../../service/achievement.service'
import { Achievement } from '../../models/achievement'
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.css']
})
export class AchievementCardComponent implements OnInit {

  achievement: Achievement = new Achievement();
  achievements: Achievement[] = [];
  statuses: any[] = [];
  unlockerTypes: any[] = [];
  rarenesss: any[]=[];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;


  constructor(private achievementService: AchievementService, private router: Router, 
    private unlockableService: UnlockableService) { }

  /* istanbul ignore next */
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

    this.unlockableService.getUnlockerRareness().subscribe(
      datos => {
        console.log(datos)
        this.rarenesss = datos;
      }
    )
  }

  /* istanbul ignore next */
  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.description = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  
  /* istanbul ignore next */
  nullInputIcon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.icon = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }


  /* istanbul ignore next */
  nullInputCoinsCost(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.coinsCost = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  
  /* istanbul ignore next */
  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

    
  /* istanbul ignore next */
  nullInputRareness(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.rareness = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

    
  /* istanbul ignore next */
  nullInputUnlockerType(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.unlockerType = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputUnlockerValue(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.achievement.unlockerValue = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
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

  /* istanbul ignore next */
  showUpdateForm(){
    this.showUpdate = true;
    this.show = false;
    this.showChange = false;
  }

  /* istanbul ignore next */
  showChangeForm(){
    this.showChange = true;
    this.show = false;
    this.showUpdate = false;
  }

  /* istanbul ignore next */
  loadDataAchievements() {
    this.router.navigate(['achievement']);
  }

  /* istanbul ignore next */
  updateAchievement() {
    if (this.achievement.description === ''){
      this.achievement.description = null;
    }

    if(this.achievement.icon === ''){
      this.achievement.icon = null;
    }
    if(this.achievement.name === ''){
      this.achievement.name = null;
    }

    this.achievementService.updateAchievement(this.achievement).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.achievement = new Achievement();
  }

  /* istanbul ignore next */
  changeAchievement(){
    if (this.achievement.description === ''){
      this.achievement.description = null;
    }

    if(this.achievement.icon === ''){
      this.achievement.icon = null;
    }
    
    if(this.achievement.name === ''){
      this.achievement.name = null;
    }

    this.achievementService.changeAchievement(this.achievement).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.achievement = new Achievement();
  }

  /* istanbul ignore next */
  deleteAchievement(achievement: Achievement) {
    this.achievementService.deleteAchievement(achievement.idUnlockable).subscribe((data) => {
      this.loadDataAchievements();
    });
  }


}
