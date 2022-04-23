import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../service/avatar.service'
import { Avatar } from '../../models/avatar'
import {MatDialog} from '@angular/material/dialog';
import { AvatarNewFormComponent } from 'src/app/new-forms/avatar-new-form/avatar-new-form.component';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent implements OnInit {

  imgUrl: string = "a";

  avatars: any[] = [];

  id: number = 6;

  constructor(private avatarService: AvatarService,  public dialog: MatDialog) { }

  
  ngOnInit(): void {
    this.avatarService.getAvatarById(this.id).subscribe(response => {
      //console.log(response)
      this.avatars = [response];
      console.log(response.icon)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarNewFormComponent);

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
