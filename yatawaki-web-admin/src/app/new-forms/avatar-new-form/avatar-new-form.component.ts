import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-avatar-new-form',
  templateUrl: './avatar-new-form.component.html',
  styleUrls: ['./avatar-new-form.component.css']
})
export class AvatarNewFormComponent implements OnInit {

  avatar: Avatar = new Avatar();
  statuses: any[] = [];
  unlockerTypes: any[] = [];
  //formulario: FormGroup;

  constructor(private avatarService: AvatarService, private unlockableService: UnlockableService) { }

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

  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.description = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  
  nullInputIcon(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.icon = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }
  nullInputEnhancedFeatures(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.enhancedFeaturesJson = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputCoinsCost(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.coinsCost = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  
  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

    
  nullInputRareness(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.rareness = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

    
  nullInputUnlockerType(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.avatar.unlockerType = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }


  insertAvatar() {
    /*if (this.avatar.description === ''){
      this.avatar.description = null;
    }
    if(this.avatar.enhancedFeaturesJson === ''){
      this.avatar.enhancedFeaturesJson = null;
    }
    if(this.avatar.icon === ''){
      this.avatar.icon = null;
    }
    if(this.avatar.name === ''){
      this.avatar.name = null;
    }
    if(this.avatar.coinsCost === 0){
      this.avatar.coinsCost = null;
    }
    if(this.avatar.rareness === ''){
      this.avatar.rareness = null;
    }
    if(this.avatar.unlockerType === ''){
      this.avatar.unlockerType = null;
    }*/

    this.avatarService.createAvatar(this.avatar).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.avatar = new Avatar();
    //this.router.navigate(['ListCustomer']);
  }


}
