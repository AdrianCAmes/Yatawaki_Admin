import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-avatar-change-form',
  templateUrl: './avatar-change-form.component.html',
  styleUrls: ['./avatar-change-form.component.css']
})
export class AvatarChangeFormComponent implements OnInit {

  id: number = 0;
  avatar: Avatar = new Avatar();
  statuses: any[] = [];
  unlockerTypes: any[] = [];
  valor:string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private avatarService: AvatarService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.avatarService.getAvatarById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.avatar = datos;
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
  }

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.name = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.description = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputIcon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.icon = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputEnhancedFeatures(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.enhancedFeaturesJson = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeAvatar() {
    if (this.avatar.description === ''){
      this.avatar.description = null;
    }
    if(this.avatar.enhancedFeaturesJson === ''){
      this.avatar.enhancedFeaturesJson = null;
    }
    if(this.avatar.icon === ''){
      this.avatar.icon = null;
    }
    console.log(this.avatar.name)
    if(this.avatar.name === ''){
      this.avatar.name = null;
    }
    this.avatarService.changeAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }

}
