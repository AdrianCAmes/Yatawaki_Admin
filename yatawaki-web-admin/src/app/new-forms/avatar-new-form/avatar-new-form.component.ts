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

  insertAvatar() {
    this.avatarService.createAvatar(this.avatar).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.avatar = new Avatar();
    //this.router.navigate(['ListCustomer']);
  }


}
