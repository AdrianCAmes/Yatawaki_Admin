import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from '../../service/avatar.service'
import { Avatar } from '../../models/avatar'
import {MatDialog} from '@angular/material/dialog';
import { AvatarNewFormComponent } from 'src/app/new-forms/avatar-new-form/avatar-new-form.component';
import { AvatarUpdateFormComponent } from 'src/app/update-forms/avatar-update-form/avatar-update-form.component';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent implements OnInit {


  avatar: Avatar = new Avatar();
  avatars: Avatar[] = [];
  statuses: any[] = [];
  unlockerTypes: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private avatarService: AvatarService,  public dialog: MatDialog, private router: Router,
    private unlockableService: UnlockableService) { }

  
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

  searchAvatarById() {
    this.avatarService.getAvatarById(this.id).subscribe((avatar) => {
      console.log(avatar);
      this.avatar = avatar;
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

  loadDataAvatars() {
    this.router.navigate(['avatar']);
  }

  nullInput(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  updateAvatar() {
    if (this.avatar.description === ''){
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

    this.avatarService.updateAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }

  changeAvatar(){
    if (this.avatar.description === ''){
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
    this.avatarService.changeAvatar(this.avatar).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.avatar = new Avatar();
  }

  deleteAvatar(avatar: Avatar) {
    this.avatarService.deleteAvatar(avatar.idUnlockable).subscribe((data) => {
      this.loadDataAvatars();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarUpdateFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  toPngBlob(str:string){
    var hexStr = str.slice(2);
    var buf = new ArrayBuffer(hexStr.length/2);
    var byteBuf = new Uint8Array(buf);
    for (let i=0; i<hexStr.length; i+=2) {
      byteBuf[i/2] = parseInt(hexStr.slice(i,i+2),16);
    }
    var blob = new Blob([byteBuf], {type: "image/png"});
    return blob;
  };

}
