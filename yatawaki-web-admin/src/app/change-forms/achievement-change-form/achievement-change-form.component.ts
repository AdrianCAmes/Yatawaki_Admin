import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/service/achievement.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-achievement-change-form',
  templateUrl: './achievement-change-form.component.html',
  styleUrls: ['./achievement-change-form.component.css']
})
export class AchievementChangeFormComponent implements OnInit {

  id: number = 0;
  achievement: Achievement = new Achievement();
  statuses: any[] = [];
  unlockerTypes: any[] = [];
  rarenesss: any[]=[];
  evidencia: any;
  compWindow: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public achievementService: AchievementService, private unlockableService: UnlockableService) { 
      this.compWindow = window;
    }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.achievementService.getAchievementById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.achievement = datos;
      }
    );
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

  changeAchievement() {
    this.achievementService.changeAchievement(this.achievement).subscribe(
      (datos) => {
        this.evidencia = datos
        console.log(this.evidencia);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.achievement = new Achievement();
    return this.router.navigate(['sidenavbar/achievement']).then(()=>
    {
      console.log(this.router.url);
      this.compWindow.location.reload();
    })
  }

}
