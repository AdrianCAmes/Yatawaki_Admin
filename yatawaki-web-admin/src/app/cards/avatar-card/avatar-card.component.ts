import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../service/avatar.service'
import { Avatar } from '../../models/avatar'
import {MatDialog} from '@angular/material/dialog';
import { AvatarNewFormComponent } from 'src/app/new-forms/avatar-new-form/avatar-new-form.component';
import { AvatarUpdateFormComponent } from 'src/app/update-forms/avatar-update-form/avatar-update-form.component';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent implements OnInit {


  avatar: Avatar = new Avatar();
  avatars: Avatar[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;

  constructor(private avatarService: AvatarService,  public dialog: MatDialog) { }

  
  ngOnInit(): void {
    /*this.avatarService.getAvatarById(this.id).subscribe(response => {
      //console.log(response)
      this.avatars = [response];
      console.log(response.icon)
    });*/
  }

  searchAvatarById() {
    this.avatarService.getAvatarById(this.id).subscribe((avatar) => {
      console.log(avatar);
      this.avatar = avatar;
    });
    this.show = true;
    this.showUpdate = false;
  }

  showUpdateForm(){
    this.showUpdate = true;
    this.show = false;
  }

  updateAvatar() {
    this.avatarService.updateAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
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
